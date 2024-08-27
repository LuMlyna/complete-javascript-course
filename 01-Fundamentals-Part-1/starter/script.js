/*
//////////////////////////////////////////////////////
// Values and Variables
let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("John");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let PI = 3.14115;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);


//////////////////////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "John");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(year);
console.log(typeof year);

console.log(typeof null); //it should return null, but if is returning object, which is an error in JS


//////////////////////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1997;

var job = "programmer";
job = "teacher";


//////////////////////////////////////////////////////
// Basic Operators
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2020;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 -> 2 to the power of 3 -> 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Smith";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // we have 2 types of operators = & +; result = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + x = 101
x--; // x = x - x = 100
x /= 2; // x = x / 2 = 50
console.log(x);

// Comparison Operators
// >, <, >=, <=
console.log(ageJonas > ageSara); // true
console.log(ageSara >= 18); // false

const isFullAge = ageSara >= 18;

//Operator Precedence
let z, y;
z = y = 25 - 10 - 5; // z = y = 10, z = 10
console.log(z, y);

const averageAge = (ageJonas + ageSara) / 2; // prednosť majú operácie ako v matematike, zátvorky idú prvé a potom delenie
console.log(averageAge);


//////////////////////////////////////////////////////
// Strings and Template Literals
const firstName = "Lu";
const job = "programmer";
const birthYear = 1997;
const year = 2024;

const introduction = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(introduction);

const introductionNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(introductionNew);

console.log(`This is just a regular string...`);

console.log(`String with
multiple
lines!`);


//////////////////////////////////////////////////////
// If/else statement
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license!");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000 && birthYear > 1900) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//////////////////////////////////////////////////////
// Type Conversion
const inputYear = "1991"; // 1991 as string
console.log(Number(inputYear)); // 1991 as number

const numberInputYear = Number(inputYear);
console.log(numberInputYear + 18); // 2009
console.log("Jonas"); // NaN - Not a Number is still a number, but invalid one
console.log(String(52)); // 52 as string -> converting number to string

// Type Coercion
console.log("I'm" + 23 + " years old."); // automaticky prehodí number na string vďaka +
console.log('23' - '10' - 3); // opposit coercion, convert string to numbers -> result 10
console.log('23' / '2'); // 11.5

let n = '1' + 1; // '11' as string
n = n - 1; // 11 convert to number and then decrease the number by 1
console.log(n); // 10 as number

let p = 2 + 3 + 4 + '5'; // 2 + 3 + 4 = 9 as number, '5' as string
console.log(p); // '95' as string


//////////////////////////////////////////////////////
// Truthy and Falsy Values
// 5 falsy values are: 0, '', undefined, null, NaN
console.log(Boolean(0)); // -> false
console.log(Boolean(undefined)); // -> false
console.log(Boolean('John')); // -> true
console.log(Boolean({})); // -> true
console.log(Boolean('')); // -> false

const money = 0;
if (money) { // if its not boolean, JS use coercion and convert it to the boolean - in this case JS convert number to boolean
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) { // undefined is falsy value, so it is false
    console.log(`YAY! Height is defined.`);
} else {
    console.log(`Height is UNDEFINED!`);
}
*/

//////////////////////////////////////////////////////
// Equality Operators


//////////////////////////////////////////////////////
// Assignment
console.log("-----Assignment-----");
const myCountry = "Slovakia";
const myContinent = "Europe";
let population = 125.43;
const isIsland = false;
const language = "slovak";

const halfPopulation = population / 2;
console.log(halfPopulation);

const increasePopulation = population + 1;
console.log(increasePopulation);

const finlandPopulation = 6;
const averagePopulation = 33;
console.log(population > finlandPopulation);
console.log(averagePopulation > population);

const description = myCountry + " is in " + myContinent + ", and its " + population + " million people speak " + language + ".";
console.log(description);

const descriptionNew = `${myCountry} is in ${myContinent}, and its ${population} million people speak ${language}.`;
console.log(descriptionNew);

let calculation;
if (population > averagePopulation) {
    calculation = population - averagePopulation;
    console.log(`Populaion of ${myCountry} is ${calculation} million above average!`)
} else {
    calculation = averagePopulation - population;
    console.log(`Population of ${myCountry} is ${calculation} below average!`)
}

console.log('9' - '5'); // -> '4' as string
console.log('19' - '13' + '17'); // -> '617' as string
console.log('19' - '13' + 17); // -> 23 as number
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143 as number