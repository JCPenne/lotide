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

- `countLetters`: Given a string, returns an object showing each character and it's total count within the string.
- `countOnly`: Given an array and an object containing which values to look for, returns an object showing each value and it's total count within the array.
- `eqArrays`: Compares two arrays for strict equality and returns a boolean stating true or false.
- `eqObjects`: Compares the key pairs of two objects, regardless of order, and returns a boolean stating true or false depending if they contain the same data.
- `findKey`: Given an Object and a function, returns an array containing all results within the Object that return true when called against the function.
- `findKeyByValue`: Given an Object and a Value, iterates over the Object and returns the key of the given Value.
- `flatten`: Given an Array containing nested Arrays, flattens all nested Arrays (recursively as needed) and returns the resulting Array.
- `head`: Given an Array, returns the first Element of the Array.
- `letterPositions`:  finds all given positions of a specified letter within a given string
- `map`: iterates over an array and performs a function for each element (manual .map function)
- `middle`: returns the individual, or pair, middle values of an array
- `tail`: returns all BUT the first element of an array
- `takeUntil`: slices an array at a specified point and returns all elements up to that point
- `without`: compares two arrays to determine if they are equal
