const countSyllables = require("./count-syllables");
const comparisons = require("./comparisons");

const kaggleDict = require("./data/arnav-sharma-as_syllable-word.json");
const myDict = require("./data/common-english-words-and-syllables.json");

const runs = [];

function test(cb, dict, options = {}) {
  let total = 0;
  let correct = 0;
  const quiet = options.quiet || false;

  Object.entries(dict).forEach(([word, syllables]) => {
    if (syllables) {
      total++;
      const result = cb(word);
      if (result == syllables) {
        correct++;
      } else {
        !quiet && console.log("WRONG", word, syllables, result);
      }
    }
  });

  const fraction = correct / total;

  console.log(correct + "/" + total + " correct");
  console.log(fraction);

  runs.push([cb.name, fraction]);
}

test(countSyllables, kaggleDict);
test(countSyllables, myDict, { quiet: true });
test(comparisons.syllapy, kaggleDict, { quiet: true });

console.log(runs);
