'use strict';
/*
//////////////////////////////////////////////////////
// Activation Scrict Mode
// 'use strict'; -> this should be at the beggining of the script, if helps prevent bugs and help to fix them

let hasDrivesLicense = false;
const passTest = true;

if (passTest) hasDrivesLicense = true;
if (hasDrivesLicense) console.log('I can drive :)');


//////////////////////////////////////////////////////
// Functions
function logger() {
    console.log('My name is Lu.');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//////////////////////////////////////////////////////
// Function Declaration - I can call function declaration before define it
function calcAge1(birthYear) {
    return 2024 - birthYear;
}
const age1 = calcAge1(1997);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const age2 = calcAge2(1997);

console.log(age1, age2);

// Arrow Functions
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1997, 'Lu'));


//////////////////////////////////////////////////////
// Functions calling other Functions
function cutFruitPieces(fruit) {
    return fruit * 2;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(1, 2));


//////////////////////////////////////////////////////
// Arrays
const friends = ['Michael', 'Steven', 'Peter'];

const year = new Array(1991, 2002, 2024);

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Peter

friends[1] = 'Drake'; // we replaced Steven with Drake
console.log(friends);

const firstName = 'Lu';
const lu = [firstName, 'Mlyna', 2024 - 1997, 'programmer', friends];
console.log(lu);

const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//////////////////////////////////////////////////////
// Array Operations
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // mehod that attach new element at the end of the array
console.log(friends);
console.log(newLength); // 4

friends.unshift('Harry'); // adding elemnets at the beggining of the array
console.log(friends);

// Remove elements
const popped = friends.pop(); // remove last element from the array and return removed element
console.log(popped);

friends.shift(); // remove first element from the array
console.log(friends);

// Finding if the element is part of the array
console.log(friends.indexOf('Steven')); // returning index of the element
console.log(friends.indexOf('Bob')); // return -1

console.log(friends.includes('Steven')); // return true or false, if the element is in the array
console.log(friends.includes('Bob')); // return false


//////////////////////////////////////////////////////
// Objects
const luArray = [
    'Lu',
    'Mlyna',
    2024 - 1997,
    'programmer',
    ['John', 'Noah', 'Michael']
];

const lu = {
    firstName: 'Lu',
    lastName: 'Mlyna',
    age: 2024 - 1997,
    job: 'programmer',
    friends: ['John', 'Noah', 'Michael']
}; // this object has 5 properties
console.log(lu);

// Dot Operator (.) vs. Bracket Notation
console.log(lu.lastName); // bodka objekt z array
console.log(lu['lastName']); // [] bracket notation

const nameKey = 'Name';
console.log(lu['first' + nameKey]);
console.log(lu['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Lu? Choose between firstName, lastName, age, job and friends');
console.log(lu[interestedIn]); // musím použiť bracket notation, pretože interestedIn nie je súčasťou objektu a do zátvoriek môžeme dať akúkoľvek expression

if (lu[interestedIn]) {
    console.log(lu[interestedIn])
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

lu.location = 'Slovakia';
lu['instagram'] = '@lumlyna';
console.log(lu);

// Challenge
console.log(`${lu.firstName} has ${lu.friends.length} friends, and her best friend is called ${lu.friends[0]}.`);


//////////////////////////////////////////////////////
// Object Methods
const lu = {
    firstName: 'Lu',
    lastName: 'Mlyna',
    birthYear: 1997,
    job: 'programmer',
    friends: ['John', 'Noah', 'Michael'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2024 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

// console.log(lu.calcAge(lu.birthYear));
// console.log(lu.calcAge());
console.log(lu.calcAge());
console.log(lu.getSummary());


//////////////////////////////////////////////////////
// Iteration: The For Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️.`);
};

// Loop in arrays
const lu = [
    'Lu',
    'Mlyna',
    2024 - 1997,
    'programmer',
    ['John', 'Noah', 'Michael']
];

const types = [];

for (let i = 0; i < lu.length; i++) {
    console.log(lu[i], typeof lu[i]);

    // Filling new array
    // types[i] = typeof lu[i];
    types.push(typeof lu[i]);
};
console.log(types);

const years = [1991, 2007, 1969, 1997, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
};
console.log(ages);

// continue and break
console.log('-----ONLY STRINGS-----');
for (let i = 0; i < lu.length; i++) {
    if (typeof lu[i] !== 'string') {
        continue;
    }
    console.log(lu[i], typeof lu[i]);
};

console.log('-----BREAK WITH NUMBER-----');
for (let i = 0; i < lu.length; i++) {
    if (typeof lu[i] === 'number') {
        break;
    }
    console.log(lu[i], typeof lu[i]);
};

// Looping backwards
for (let i = lu.length - 1; i >= 0; i--) {
    console.log(i, lu[i]);
};

// Nested loops
for (let e = 1; e <= 3; e++) {
    console.log(`-----Starting excercise ${e}-----`);
    for (let r = 1; r <= 5; r++) {
        console.log(`-----Lifting weight repetition ${r} 🏋️‍♂️-----`);
    }
};


//////////////////////////////////////////////////////
// Iteration: The While Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️. (FOR LOOP)`);
};

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️. (WHILE LOOP)`);
    rep++;
};

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice} 🎲`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You rolled a ${dice}. Congratulation! 🎉`);
};
*/

//////////////////////////////////////////////////////
// Assignment
/*
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return description;
}
 
const descSlovakia = describeCountry('Slovakia', 5.4, 'Bratislava');
console.log(descSlovakia);
 
const descFinlad = describeCountry('Finland', 6, 'Helsinky');
console.log(descFinlad);
 
const descNorway = describeCountry('Norway', 5.5, 'Oslo');
console.log(descNorway);


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

function describePopulation(country, population) {
    const percentage = percentageOfWorld2(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world population.`;
}
console.log(describePopulation('China', 1441));
console.log(describePopulation('Portugal', 10));

const percSlovakia1 = percentageOfWorld1(5.4);
const percChina2 = percentageOfWorld2(1441);
const percNorway2 = percentageOfWorld2(5.5);

console.log(percSlovakia1, percChina2, percNorway2);

const percentageOfWorld3 = population => (population / 7900) * 100;
const percUSA3 = percentageOfWorld3(332);

console.log(percUSA3);

const population = [1441, 5.4, 5.5, 332];
console.log(population.length == 4);

const percentages = [percentageOfWorld2(population[0]), percentageOfWorld2(population[1]), percentageOfWorld2(population[2]), percentageOfWorld2(population[3])];
console.log(percentages);

const neighbours = ['Czechia', 'Poland', 'Hungary', 'Austria', 'Ukraine'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central european country :D')
};

neighbours[neighbours.indexOf('Czechia')] = 'Czech Republic';
console.log(neighbours);

const myCountry = {
    country: 'Slovakia',
    capital: 'Bratislava',
    language: 'slovak',
    population: 5.4,
    neighbours: ['Czech Republic', 'Poland', 'Hungary', 'Austria', 'Ukraine'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this['language']}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },

    isIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};
console.log(myCountry);
console.log(myCountry.isIsland());

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry['language']}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

const increasedPopultaion = myCountry.population + 2;
console.log(increasedPopultaion);

const decreasedPopulation = myCountry['population'] - 2;
console.log(decreasedPopulation);

// For loops
for (let i = 0; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting 👌`);
}

const population = [1441, 5.4, 5.5, 332];
for (let i = 0; i < population.length; i++) {
    console.log((population[i] / 7900) * 100);
}

// Nested Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
};


const percentages3 = [];
const percentageOfWorld3 = population => (population / 7900) * 100;

let i = 0;
while (i < population.length) {
    const perc = percentageOfWorld3(population[i]);
    percentages3.push(perc);
    i++;
}

console.log(percentages3);
*/