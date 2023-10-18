import csv from "fast-csv";
import fs from "node:fs";
import path from "node:path";

const myData = {};
const kaggleData = {};

fs.createReadStream("data/common-english-words-and-syllables.csv")
  .pipe(csv.parse())
  .on("error", (err) => {
    throw new Error(err);
  })
  .on("data", (row) => {
    myData[row[0]] = row[1];
  })
  .on("end", () => {
    fs.writeFileSync(
      "data/common-english-words-and-syllables.json",
      JSON.stringify(myData)
    );
  });

fs.createReadStream("data/arnav-sharma-as_syllable-word.csv")
  .pipe(csv.parse())
  .on("error", (err) => {
    throw new Error(err);
  })
  .on("data", (row) => {
    const syllables = row[1] === "No syllable" ? 1 : row[1].split("-").length;
    kaggleData[row[0]] = syllables;
  })
  .on("end", () => {
    fs.writeFileSync(
      "data/arnav-sharma-as_syllable-word.json",
      JSON.stringify(kaggleData)
    );
  });
