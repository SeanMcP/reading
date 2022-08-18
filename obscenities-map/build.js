const fs = require("fs");
const { array } = require("badwords-list");

const prepared = array.reduce((acc, word) => {
  const lower = word.toLowerCase();
  if (/^[a-z]+$/.test(lower)) {
    acc.push([lower, true]);
  }
  return acc;
}, []);

fs.writeFileSync(
  "./level-2-words.js",
  "module.exports = " + JSON.stringify(prepared)
);
