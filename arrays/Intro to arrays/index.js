// Arrays
// Arrays are like variables with more storage, so instead of having a variable with one value an array can
// hold multiple values.



const friends = ['isias', 'Luis', 'Roy', 'Gaige'];
console.log(friends[0]) // grabs the index at the 0 array which is: Isias
console.log(friends.length) // grabs the number of elements in the array, not 0 based: 4
console.log(friends.length - 1) // produces a value which means it is an expression : 3

// change out an array
friends[3] = 'casper'
console.log(friends) // ['isias', 'Luis', 'Roy', 'casper']

// add to end of an array: push
friends.push('Jayson')
console.log(friends) // 'isias', 'Luis', 'Roy', 'casper', 'Jayson'

// add to begginning of an array: unshift
friends.unshift('Katy') // 'Katy', 'isias', 'Luis', 'Roy', 'casper'

// remove from end of array: pop
friends.pop() // don't need to specify will always remove whats at the end
console.log(friends) // jayson removed  // 'Katy', 'isias', 'Luis', 'Roy', 'casper'

// remove from begginning of an array
friends.shift()
console.log(friends) // katy yeeted // isias', 'Luis', 'Roy', 'casper'

// add variables inside an array
const firstName = 'Leroy';
friends.push(firstName);
console.log(friends) // ['isias', 'Luis', 'Roy', 'casper', 'Leroy']

// add arrays inside other arrays
let games = ['Elden Ring', 'Cyberpunk', 'Nier', friends];
console.log(games) // ['Elden Ring', 'Cyberpunk', 'Nier', Array(5)] // array 5 is friends array


// Using functions on arrays
const calcAge = function (birthYear) {
    return 2024 - birthYear - 1;
}
const years = [1999, 1980, 2020, 2012];
// cannot use another function to calculate the array like:
calcAge(years);
// instead do this
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[2])
console.log(age1, age2, age3);
// take values from an array and store into a variable
const age = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2],)]
console.log(age) // [24, 43, 3]

// find index of a value in a array: indexOf
console.log(friends.indexOf('Roy'))  // 2 index

// Array Slice
// The slice() method returns selected elements in an array, as a new array.
// does not change original array
console.log(friends.slice(0,2)) // ['Isias', 'Luis']

// find the index of a value of an array STRICT EQUALITY: includes
// includes is useful because you can add if/else statements to it
console.log(friends.includes('Luis')) // true

if(friends.includes('isias')){
    console.log('You are correct')
}else{
    console.log('what blud talking about')
}

