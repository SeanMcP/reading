# Consonant-vowel patterns

This organizes all of the words in the English language into their consonant-vowel patterns. For example, the [`cvc.json`](./lib/cvc.json) file will have all of the English words containing a consonant, followed by a vowel, and ending in a consonant, _e.g._ bat, dog, sip.

There is one notable exception to the key rule for CVCe which are consonant-vowel-consonant words that end with an "e", _e.g._ bake, sale. These are frequently identified by educators because the final e changes the initial vowel's sound. CVCe words **are** included in the CVCV list, so be mindful of duplicate words.

There are two separate files for the patterns: [`patterns.json`](./lib/patterns.json) and [`short-patterns.json`](./lib/short-patterns.json). The former contains all of the patterns and is quite long (9703). A more useful file is the latter, which contains all of the patterns for words that are 1-5 letters. There are are a more manageable 60 of these.

The utility of these lists is heavily dependent on the dataset, which admittedly contains some pretty strange words. Future refinements could source a new set of English words or filter out some of the most uncommon inclusions.

## Usage

You can download the files from GitHub or install the package via npm:

```sh
npm i consonant-vowel-patterns
```

Then reference the data as JSON objects:

```js
const cvcWords = require("consonant-vowel-patterns/lib/cvc.json");
```
