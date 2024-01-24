// function decleration
// A function decleration is not a statement or expression
// A function decleration is hoisted, which means you can call it before it is defined
// use when you want to create a global function to use throughout your code.

functionOne(); // can call it before you declare it


function functionOne() {
    console.log("function decleration");
}


functionOne(); // can call it after you declare it



//****************************************************************//


//function expression
// Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.
// not hoisted
// can be used with arrow functions

funcExp() // Uncaught ReferenceError: Cannot access 'funcExp' before initialization not global


const funcExp = function functionTwo() {
    console.log('function Expression')
}

funcExp() // works

