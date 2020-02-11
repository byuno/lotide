# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @byuno/lotide`

**Require it:**

`const _ = require('@byuno/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: asserts equal array types
* `assertEqual(actual, expected)`: asserts two values
* `assertObjectEqual(actual, expected)`: asserts two objects types
* `countLetters(string)`: counts the number of letters in the string
* `countOnly(allItems, itemsToCount)`: counts the specified items
* `eqArrays(array1, array2)`: determines if two arrays are identical
* `eqObjects(object1, object2)`: determines if two objects are identical
* `findKey(object, callback)`: return keys based on property value
* `findKeyByValue(object, value)`: returns key in object by value
* `flatten(array)`: flattens input array
* `head(array)`: returns the firt value of the array
* `letterPositions(sentence)`: returns the index of given letter in a sentence
* `map(array, callback)`: returns a new array based on the callback function
* `middle(array)`: find the middle value of an array
* `tail(array)`: finds all but the first value of an array
* `without(source, itemsToRemove)`: removes items from array