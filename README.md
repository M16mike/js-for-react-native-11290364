# js-for-react-native-11290364
STUDENT ID - 11290364

This repository contains three tasks related to array manipulation using JavaScript.

## Task 1
- A JavaScript file named `arrayManipulation.js` has been created.
- It contains a function `processArray` that takes an array of numbers as an argument and returns a new array where each even number is squared and odd number tripled

## Task 2
- A function `formatArrayStrings` has been added to `arrayManipulation.js`.
- It takes two arrays as input:
  1. An array of strings
  2. An array of numbers processed by `processArray` from Task 1
- For each string, it modifies the case based on the corresponding number:
  - If the number is even, it capitalizes the entire string
  - If the number is odd, it converts the string to lowercase

## Task 3
- A file `userInfo.js` has been created.
- A function `createUserProfiles` has been written.
- It takes two arguments:
  1. An array of names
  2. The array of modified names from Task 2
- It returns an array of objects.
- Each object contains:
  - `originalName`: The original name from the input array
  - `modifiedName`: The modified name from Task 2
  - `id`: An auto-incremented ID starting from 1
