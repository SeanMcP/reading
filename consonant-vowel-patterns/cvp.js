const fs = require("fs");
const words = require("an-array-of-english-words");

const vowels = "aeiouy";

const map = {
  cvce: [],
};

for (let i = 0; i < words.length; i++) {
  const word = words[i];

  let pattern = "";

  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    pattern += vowels.includes(letter) ? "v" : "c";
  }

  if (pattern === "cvcv" && word.slice(-1) === "e") {
    map.cvce.push(word);
  }

  if (!map[pattern]) {
    map[pattern] = [];
  }

  map[pattern].push(word);
}

const sorted = {};
const pattern = Object.keys(map);
pattern.sort();

fs.writeFileSync("./lib/patterns.json", JSON.stringify(pattern));

const shortPatterns = pattern.filter((key) => key.length < 6);
console.log("UPDATE PATTERNS IN README.md (IF NECESSARY)");
console.log("  All patterns  ", pattern.length);
console.log("  Short patterns", shortPatterns.length);

fs.writeFileSync("./lib/short-patterns.json", JSON.stringify(shortPatterns));

pattern.forEach((pattern) => {
  sorted[pattern] = map[pattern];
  fs.writeFileSync(`./lib/${pattern}.json`, JSON.stringify(map[pattern]));
});

fs.writeFileSync("./lib/all.json", JSON.stringify(sorted));
