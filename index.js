//An index of all Lotide functions. Allowing global exports within the folder from one source file.
const countLetters = require('./functions/countLetters');
const countOnly = require('./functions/countOnly');
const eqArrays = require('./functions/eqArrays');
const eqObjects = require('./functions/eqObjects');
const findKey = require('./functions/findKey');
const findKeyByValue = require('./functions/findKeyByValue');
const flatten = require('./functions/flatten');
const head = require('./functions/head');
const letterPositions = require('./functions/letterPositions');
const map = require('./functions/map');
const middle = require('./functions/middle');
const tail = require('./functions/tail');
const takeUntil = require('./functions/takeUntil');
const without = require('./functions/without');

module.exports = {
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without,
};
