// function callback
// pretty much the process of making a function that can be used with other functions

function cutPieces(fruit) {
    return fruit * 4;
};


function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
};

console.log(fruitProcessor(4, 4)); // Juice with 16 pieces of apple and 16 pieces of orange



// or instead on putting the values in a string you can put them into an array

function fruitProcessor2(apples2, oranges2) {
    const applePieces2 = cutPieces(apples2);
    const orangePieces2 = cutPieces(oranges2);
    const values = [applePieces2, orangePieces2];
    return values;

};

console.log(fruitProcessor2(4, 1)); // 16, 4



//********************************************************************//


// tells me my age
const calcAge = function (birthYear) {
    return 2024 - birthYear - 1;  // 24
}

// tells me my how many years I have until I retire at 65
const yearsUntilRetirement = function (yearBorn, firstName) {
    const age = calcAge(yearBorn);  // storing age value in 'age' variable
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`)
        // use returns afer console.logs because returns automatically terminate after you return it
        return retirement;
    } else {
        console.log(`${firstName} has already retired man!`);
        return -1
    }


}

console.log(yearsUntilRetirement(1999, 'Leroy'));  // Leroy retires in 41 years!
                                                  // 41