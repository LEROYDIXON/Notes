// spread operator (...) = allows an iterable such as an array or string to be expanded
// into seperate elements (unpacks the elements) */

let numbers = [1, 2, 3, 4, 5];
let maximumNum = Math.max(numbers);
console.log(maximumNum)  // => NaN because you cant pass arrays thru math.max method

// use this instead

let maximumNum2 = Math.max(...numbers);
console.log(maximumNum2) // => 5 because the spread operator opens up the numbers array and unpacks each element


/******************** Example 2 **********************/


let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "cellery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]
console.log(foods); // without the spread parameter the foods variable would just add
// the 'fruits' and 'vegatables' arrays to it instead of the values //
// (with spread) ['apple', 'orange', 'banana', 'carrots', 'cellery', 'potatoes', 'eggs', 'milk']
// (without spread)  [Array(3), Array(3), 'eggs', 'milk']