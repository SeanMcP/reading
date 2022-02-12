const fs = require("fs");
const words = require("an-array-of-english-words");

const vowels = "aeiouy";

const map = {
  cvce: [],
};

for (let i = 0; i < words.length; i++) {
  const word = words[i];

  let key = "";

  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    key += vowels.includes(letter) ? "v" : "c";
  }

  if (key === "cvcv" && word.slice(-1) === "e") {
    map.cvce.push(word);
  }

  if (!map[key]) {
    map[key] = [];
  }

  map[key].push(word);
}

const sorted = {};
const keys = Object.keys(map);
keys.sort();

fs.writeFileSync("./lib/keys.json", JSON.stringify(keys));

const shortKeys = keys.filter((key) => key.length < 6);
console.log("UPDATE KEYS IN README.md (IF NECESSARY)");
console.log("  All keys  ", keys.length);
console.log("  Short keys", shortKeys.length);

fs.writeFileSync("./lib/short-keys.json", JSON.stringify(shortKeys));

keys.forEach((key) => {
  sorted[key] = map[key];
  fs.writeFileSync(`./lib/${key}.json`, JSON.stringify(map[key]));
});

fs.writeFileSync("./lib/all.json", JSON.stringify(sorted));
