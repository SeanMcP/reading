const countSyllables = require("./count-syllables");
const comparisons = require("./comparisons");
const testUtils = require("./test-utils");

const dictionary = require("./data/dictionary-data.json");

const runs = [];

function test(cb, options = {}) {
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

  runs.push([cb.name, fraction]);
}

test(countSyllables);
test(comparisons.syllapy, { quiet: true });

console.log(runs);
