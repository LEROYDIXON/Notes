// Objects
// Use objects to add properties (keys) to object values
// make sure to add commas after values
const leroy = {
    firstName: 'leroy',
    lastName: 'Dixon',
    age: 2024 - 1999 - 1,
    job: 'unemployed'
}

// access object using dot notation
console.log(leroy.job) // unemployed

// access object using bracket notation
console.log(leroy['age']) // 24

// assign & add objects
leroy['favGame'] = 'Elden Ring'
console.log(leroy.favGame) // Elden Ring
leroy['lastName'] = 'Dix' //  changed from dixon to dix

// putting object inside an arrow function
const introducer = (name, shirt) => {
        // Create Object person
    const person = {
        // name and shirt parameter are stored inside the object key property
        name: name,
        shirt: shirt
    }
    return person;
}
const myPerson = introducer("leroy", "Grey")
let sent = `hello my name is ${myPerson.name} and I am wearing a ${myPerson.shirt} shirt`

console.log(sent)

// putting functions inside of objects
// using methods()
const job =  {
job: 'Netflix',
title: 'Software Developer',
salary: 150000,
assets: 250000,
netWorth: function () {
    // this.salary and this.assets basically mean job.salary and job.assets ( so basically the main name of the object )
    return this.salary + this.assets
}
}
const intro1 = `Hello my name is ${leroy.firstName} I work at ${job.job} and my networth is ${job.netWorth()}`
console.log(intro1)