function foo(a, b) {
  // Handle null, undefined, and NaN values
  a = a === null || a === undefined || isNaN(a) ? 0 : a;
  b = b === null || b === undefined || isNaN(b) ? 0 : b;
  return a + b; 
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: 20
console.log(foo(10, null)); // Output: 10
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 20)); // Output: 20
console.log(foo(10, undefined)); // Output: 10
console.log(foo(NaN, 20)); // Output: 20
console.log(foo(10, NaN)); //Output: 10