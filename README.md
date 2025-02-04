# JavaScript Function Bug: Handling Null, Undefined, and NaN Inputs

This repository demonstrates a common bug in JavaScript functions involving the handling of null, undefined, and NaN values. The `foo` function attempts to add two numbers, but it doesn't robustly handle cases where the inputs might not be numbers.

## Bug Description
The `bug.js` file contains a function that adds two numbers. While it correctly handles null values, it does not explicitly handle undefined or NaN values, leading to potential issues.

## Solution
The `bugSolution.js` file provides a solution that enhances the function's input validation to handle these edge cases more effectively.

## How to Run
1. Clone the repository.
2. Open `bug.js` and `bugSolution.js`.
3. Observe the differences in behavior when testing with various inputs (numbers, null, undefined, and NaN).