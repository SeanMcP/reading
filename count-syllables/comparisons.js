/**
 * @see https://medium.com/@mholtzscher/programmatically-counting-syllables-ca760435fab4
 */
function syllapy(word) {
  let syllable_count = 0,
    vowels = "aeiouy";

  if (vowels.includes(word[0])) {
    syllable_count += 1;
  }
  for (let i = 1; i < word.length; i++) {
    if (vowels.includes(word[i]) && !vowels.includes(word[i + 1])) {
      syllable_count += 1;
    }
  }
  if (word.slice(-1) === "e") {
    syllable_count -= 1;
  }

  if (
    word.slice(-2) === "le" &&
    word.length > 2 &&
    !vowels.includes(word[-3])
  ) {
    syllable_count++;
  }

  if (syllable_count === 0) {
    syllable_count += 1;
  }

  return syllable_count;
}

module.exports = {
  syllapy,
};
