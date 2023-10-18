const countSyllables = require("./count-syllables");
const testUtils = require("./test-utils");

const dictionary = require("./data/dictionary-data.json");

function compare(cb, word) {
  const actual = cb(word);
  const hw = dictionary[word];
  const expected = testUtils.hwToSyllables(hw);
  if (actual !== expected) {
    testUtils.log({ word, expected, actual, hw });
  }
}

compare(countSyllables, "equal");
