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
- `letterPositions`:  Given a String, iterates over each character within it, omits spaces, returns an Object that has Keys showing each letter and values showing how many letters occur within the String.
- `map`: Handmade Array.map() function. Given an Array and a Callback Function, returns a result Array showing each element that returns true when called against the Callback Function.
- `middle`: Given an Array, if the Array length is an odd number, returns the element in the middle of the Array, if the Array length is even, returns the two middle elements of the Array, if the Array length equals 2, returns an error message, if the Array length is 1, returns the array. 
- `tail`: Given an Array, returns all elements BUT the first element
- `takeUntil`: Given an Array and a Callback Function, iterates over the Array and pushes each element into a Result Array UNTIL the Callback Function returns true.
- `without`: Given an Array and a Value, returns a new Array that is a copy of the original Array WITHOUT the value given.
