//switch statements are strict equality ( === )

let day = 'thursday'
lowerCaseDay = day.toLowerCase()
day = lowerCaseDay

switch (day) {
    case 'monday': // day === 'monday'
        console.log("Today is a day");
        console.log('Keep Going');
        break;
    case 'tueday':
        console.log('Prepare to code my dude');
        break;
    // day === wednesday and or thursday
    case 'wednesday':
    case 'thursday':
        console.log('time to get this bread')
        break;
    // will run if an invalid day was entered (basically an else statement you put at the end of an if else)
    default:
        console.log('Not a valid day!')

}



/*************
if else version
*************/

// if (day === 'monday') {
//     console.log("Today is a day")
//     console.log("Keep Going")
// } else if (day === 'tuesday') {
//     console.log("lets get this bread")
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log("do you know what formal means?")
// } else (
//     console.log("Not a valid day")
// )
