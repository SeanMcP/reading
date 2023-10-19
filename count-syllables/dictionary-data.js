const fs = require("fs");
require("dotenv").config();

const kaggleData = require("./data/arnav-sharma-as_syllable-word.json");
const words = Object.keys(kaggleData);

const dictionaryData = require("./data/dictionary-data.json");

async function getData() {
  for await (const word of words) {
    if (dictionaryData[word]) {
      return;
    }

    try {
      const syllables = await getSyllables(word);
      dictionaryData[word] = syllables;
    } catch (e) {
      throw new Error(e);
    }
  }
}

/** @see https://www.dictionaryapi.com/products/api-collegiate-dictionary */
async function getSyllables(word) {
  const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.DICTIONARY_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const [first] = data;
    return first.hwi.hw;
  } catch (e) {
    throw new Error(e);
  }
}

// getData().finally(() => {
//   fs.writeFileSync("data/dictionary-data.json", JSON.stringify(dictionaryData));
// });

getSyllables("theory").then(console.log);
