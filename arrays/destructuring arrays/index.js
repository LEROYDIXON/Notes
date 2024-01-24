// destructuring means extracting values from arrays and objects, then assigning them to variables in a convenient way

// ---------- Example 1 ------------
// Assign array elements to variables

const arr = [2, 3, 4];
// instead of
const a = arr[0];  // to locate the values in the array
const b = arr[1];
const c = arr[2];

// always declare using const when destructuring
const [x, y, z] = arr; // this way assigns x,y,z => 2,3,4
console.log(x, y, z);

// ---------- Example 2 ------------
// swap values of 2 variables

let d = 1;
let e = 2;
[d, e] = [e, d]
console.log(d, e) // => 2,1

// ---------- Example 3 ------------
// swap 2 elements in an array

const colors = ['red', 'green', 'blue', 'black', 'white'];
[colors[0], colors[4]] = [colors[4], colors[0]];  // swaps red and white elements in the array
console.log(colors) // ['white', 'green', 'blue', 'black', 'red']

// ---------- Example 4 ------------

