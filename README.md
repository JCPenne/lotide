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

- `countLetters`: Takes a String as a Parameter. Returns an object containing the count of each letter within the input string.
- `countOnly`: Takes a source Array, and an array listing the items to be counted as Parameters.
Returns a result Object containing all items from the source Array that are to be counted.
- `eqArrays`: Takes two Arrays as Parameters.
Returns a True or False result after checking for strict equality.
- `eqObjects`: Takes two Objects as Parameters.
Checks for equal length first, then checks for strict equality across all elements.
Order of elements within each Object does not matter.
- `findKey`: Takes an Object and a Callback Function as Parameters.
Returns an Array of Object Keys that return true when called within the Callback Function.
- `findKeyByValue`: Takes an Object and a Value as Parameters.
Returns any key that contains the Value Parameter.
- `flatten`: Takes an Array with nested Arrays within it as a Parameter.
Recursively flattens the Array and returns a new Array with the flattened results.
- `head`: Takes an Array as a Parameter.
Returns the first element of the Array.
- `letterPositions`:  Takes a String as a Parameter.
Iterates over each character within the string, omits spaces, and returns an Object showing the index/es of each character.
- `map`: Takes an Array and a callback Function as Parameters.
Returns a results Array of all Elements in the Parameter Array after passing them through the callback Function
- `middle`: Takes an Array as a Parameter.
Returns a result Array showing the middle character/s if possible of the Parameter Array.
- `tail`: Takes an Array as a Parameter.
Slices the first element off of the Parameter Array and returns the remainder of the Parameter Array.
- `takeUntil`: Takes an Array and a Callback Function as Parameters.
Returns a result Array that contains each Element of the Parameter Array, stopping once the Callback Function returns true.
- `without`: Takes a source Array and itemsToRemove Array as Parameters.
Returns the source Array after filtering out all items that exist within the itemsToRemove Array
