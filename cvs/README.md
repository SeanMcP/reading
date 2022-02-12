# CVs

> Consonants and Vowels

This organizes all of the words in the English language into their consonant-vowel keys. For example, the [`cvc.json`](./lib/cvc.json) file will have all of the English words containing a consonant, followed by a vowel, and ending in a consonant, _e.g._ bat, dog, sip.

There is one notable exception to the key rule for CVCe which are consonant-vowel-consonant words that end with an "e", _e.g._ bake, sale. These are frequently identified by educators because the final e changes the initial vowel's sound. CVCe words **are** included in the CVCV list, so be mindful of duplicate words.

There are two separate files for the keys: [`keys.json`](./lib/keys.json) and [`short-keys.json`](./lib/short-keys.json). The former contains all of the keys and is quite long (9702). A more useful file is the latter, which contains all of the keys for words that are fewer than 6 letters. There are are a more manageable 59 of these.

The utility of these lists is heavily dependent on the dataset, which admittedly contains some pretty strange words. Future refinements could source a new set of English words or filter out some of the most uncommon inclusions.
