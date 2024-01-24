function fruitProcessor(apples, oranges) {
    const fruitStr = `I have ${apples} apples and ${oranges} oranges`
    //return stops the execution of a function and returns a value
    return fruitStr;
}
console.log(fruitProcessor(2, 4)); // I have 2 apples and 4 oranges


//*********************************************************************//

//reusable function so don't need to add parameters
function partyPurple() {
    document.querySelector('h1').style.color = 'Purple'
}
// function call
partyPurple(); // changes h1 to purple


//*********************************************************************//

function ageChecker(birthYear) {
    let age = 2024 - birthYear - 1;
    return age;
}
console.log(ageChecker(1999)); // 24



//Do this instead

function ageChecker2(birthYear) {
    return 2024 - birthYear - 1;

}
console.log(ageChecker2(1999)); // 24

