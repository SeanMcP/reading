const vowels = "aeiouy";

function countSyllables(raw) {
  const word = raw.toLowerCase();
  let syllableCount = 0;
  const vowelChunks = [];
  let currentChunk = "";

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (vowels.includes(letter)) {
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
      if (vowelChunks.length === 0 || word.slice(-2) === "le") {
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
      case "ua": {
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

module.exports = countSyllables;
