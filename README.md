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

- `assertEqual(actual,expected)`: uses strict equality to check the value of 'actual' vs 'expected'. logs a simile of console.assert to show a pass or fail
- `head(arr)`: returns the first element of an array
- `tail(arr)`: returns a new array consisting of all elements EXCEPT the first element of the original array
