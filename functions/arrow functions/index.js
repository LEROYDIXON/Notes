// Arrow functions
// use for simple one liner functions
const age = birthYear => 2024 - birthYear - 1;
console.log(age(1999)); // 24

//instead of
const age2 = function age2(birthYear) {
    return 2024 - birthYear - 1;
}
console.log(age2(1999)); // 24


// Arrow functions with paramaters
let counter = (num1, num2) => num1 + num2;
console.log(counter(10,10)); // 20


// Arrow function with one parameter
//dont need parenthesis
let bestGame = game => game + ' is the best game out';
console.log(bestGame('Elden Ring'));



