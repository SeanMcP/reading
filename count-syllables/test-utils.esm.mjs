export const hwToSyllables = (hw) => hw.split(/[*-\s]/g).length;

export const log = ({ word, expected, actual, hw }) =>
  console.log(`WRONG: ${word}; EXPECTED ${expected}; ACTUAL ${actual}; ${hw}`);
