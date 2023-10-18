module.exports = {
  hwToSyllables: (hw) => hw.split(/[*-\s]/g).length,
  log: ({ word, expected, actual, hw }) =>
    console.log(
      `WRONG: ${word}; EXPECTED ${expected}; ACTUAL ${actual}; ${hw}`
    ),
};
