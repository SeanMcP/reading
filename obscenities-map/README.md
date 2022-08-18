# `obscenities-map`

> 📖 A tiered lookup for English obscenities

## Usage

```sh
npm i obscenities-map
```

```js
const obscenities = require("obscenities-map");

obscenities.one.has("shit"); // true
obscenities.one.has("anus"); // false

obscenities.two.has("shit"); // true
obscenities.two.has("anus"); // true
```

## Tiers

This library provides two tiers of obscenities. The first tier is for words that are always obscene. The second tier includes words that are often obscene but may have appropriate contexts.

## Note

This library does not include multiple parts of speech. As a result, it will not be effective at detecting obscenities in real-world scenarios. Rather, use it when working with word lists to spot check for obscenities.
