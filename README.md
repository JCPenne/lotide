# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jcpenne/lotide`

**Require it:**

`const _ = require('@jcpenne/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `countLetters`: iterates over a string to count each occurence of each letter.
- `countOnly`: iterates over an array to count only the items specified
- `eqArrays`: checks that two arrays are strictly equal
- `eqObjects`: checks that two objects are strictly equal
- `findKey`: finds a given key of an object
- `findKeyByValue`: finds a key with the given value in an object
- `flatten`: flattens an array with nested arrays within it to just one array
- `head`: slices the first element off of an array
- `letterPositions`:  finds all given positions of a specified letter within a given string
- `map`: iterates over an array and performs a function for each element (manual .map function)
- `middle`: returns the individual, or pair, middle values of an array
- `tail`: returns all BUT the first element of an array
- `takeUntil`: slices an array at a specified point and returns all elements up to that point
- `without`: compares two arrays to determine if they are equal
