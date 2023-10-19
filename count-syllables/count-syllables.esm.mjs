const vowels = "aeiouy";

function isVowel(letter) {
  return vowels.includes(letter);
}

function wordMatchesPattern(word, pattern) {
  if (word.length !== pattern.length) {
    return false;
  }
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const patternLetter = pattern[i];

    if (patternLetter === "C") {
      if (isVowel(letter)) {
        return false;
      }
    } else if (patternLetter === "V") {
      if (!isVowel(letter)) {
        return false;
      }
    } else {
      if (letter !== patternLetter) {
        return false;
      }
    }
  }
  return true;
}

export default function countSyllables(raw) {
  const word = raw.toLowerCase();
  let syllableCount = 0;
  const vowelChunks = [];
  let currentChunk = "";

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (isVowel(letter)) {
      currentChunk += letter;
    } else {
      if (currentChunk.length) {
        // Exclude 'ed' clusters
        if (i === word.length - 1 && currentChunk === "e" && letter === "d") {
          currentChunk = "";
          continue;
        }
        vowelChunks.push(currentChunk);
        currentChunk = "";
      }
    }
  }

  if (currentChunk.length) {
    if (currentChunk === "e") {
      // Only add an 'e' chunk if it is the only chunk or it is part of an 'le'
      // cluster
      if (
        vowelChunks.length === 0 ||
        (word.slice(-2) === "le" && !wordMatchesPattern(word.slice(-3), "Vle"))
      ) {
        vowelChunks.push(currentChunk);
      }
    } else {
      vowelChunks.push(currentChunk);
    }
  }

  for (let i = 0; i < vowelChunks.length; i++) {
    const chunk = vowelChunks[i];
    switch (chunk) {
      case "ia":
      // case "ie": // Removing this is debatable
      // case "ua": // Need refinement
      {
        syllableCount += 2;
        break;
      }
      case "y": {
        if (i === vowelChunks.length - 1 && word.slice(-3) === "ely") {
          // We've already counted the 'e', so we can skip the ultimate 'y'
          break;
        }
      }
      default: {
        syllableCount += 1;
        break;
      }
    }
  }

  return syllableCount;
}
