const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const countSyllables = require("./count-syllables");
const comparisons = require("./comparisons");

const words = [];

function test(cb) {
  let total = 0;
  let correct = 0;
  for (let i = 0; i < words.length; i++) {
    const [word, syllables] = words[i];

    if (syllables) {
      total++;
      const result = cb(word);
      if (result == syllables) {
        correct++;
      } else {
        console.log("WRONG", word, syllables, result);
      }
    }
  }

  console.log(correct + "/" + total + " correct");
  console.log(correct / total);
}

fs.createReadStream(
  path.resolve(__dirname, "common-english-words-and-syllables.csv")
)
  .pipe(csv.parse())
  .on("error", (error) => console.error(error))
  .on("data", (row) => words.push(row))
  .on("end", (rowCount) => {
    console.log(`Parsed ${rowCount} lines`);
    test(countSyllables);
    // test(comparisons.syllapy);
  });
