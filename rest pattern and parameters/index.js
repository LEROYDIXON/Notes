// rest parameters (...rest) = The rest parameter syntax allows a function to accept an indefinite number of
// arguments as an array


function openFridge(...foods){
    console.log(...foods); // => pizza sushi ramen hotdog
}

const food1 = 'pizza';
const food2 = 'sushi';
const food3 = 'ramen';
const food4 = 'hotdog';

openFridge(food1, food2, food3, food4) // function call / invoking


/****************** Example 2 *******************/


function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
     }
    return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${total}`) // => Your total is $15







