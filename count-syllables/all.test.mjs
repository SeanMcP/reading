import countSyllables from "./count-syllables.esm.mjs";
import * as testUtils from "./test-utils.esm.mjs";
import { syllable } from "syllable";

import dictionary from "./data/dictionary-data.json" assert { type: "json" };

const runs = [];

function test(cb, options = {}) {
  console.time(cb.name);
  let total = 0;
  let correct = 0;
  const quiet = options.quiet || false;

  Object.entries(dictionary).forEach(([word, hw]) => {
    if (!hw) {
      return console.log("no hw", word);
    }
    total++;
    const result = cb(word);
    const syllables = testUtils.hwToSyllables(hw);
    if (result == syllables) {
      correct++;
    } else {
      !quiet &&
        Math.abs(result - syllables) > 1 &&
        testUtils.log({ word, expected: syllables, actual: result, hw });
    }
  });

  const fraction = correct / total;

  console.log(correct + "/" + total + " correct");
  console.log(fraction);
  console.timeEnd(cb.name);

  runs.push([cb.name, fraction]);
}

test(countSyllables, { quiet: true });
test(syllable, { quiet: true });
test(
  function syllapy(word) {
    let syllable_count = 0,
      vowels = "aeiouy";

    if (vowels.includes(word[0])) {
      syllable_count += 1;
    }
    for (let i = 1; i < word.length; i++) {
      if (vowels.includes(word[i]) && !vowels.includes(word[i + 1])) {
        syllable_count += 1;
      }
    }
    if (word.slice(-1) === "e") {
      syllable_count -= 1;
    }

    if (
      word.slice(-2) === "le" &&
      word.length > 2 &&
      !vowels.includes(word[-3])
    ) {
      syllable_count++;
    }

    if (syllable_count === 0) {
      syllable_count += 1;
    }

    return syllable_count;
  },
  { quiet: true }
);

console.log(runs);
