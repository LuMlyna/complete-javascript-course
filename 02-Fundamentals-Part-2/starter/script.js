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

*/
//////////////////////////////////////////////////////
// Array Operations



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
*/

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

