const countSyllables = require("./count-syllables");
const comparisons = require("./comparisons");

const kaggleDict = require("./arnav-sharma-as_syllable-word.json");
const myDict = require("./common-english-words-and-syllables.json");

const runs = [];

function compare(cb, word) {
  const actual = cb(word);
  const expected = kaggleDict[word];
  if (actual !== expected) {
    console.log("WRONG", word, expected, actual);
  }
}

compare(countSyllables, "vary");
