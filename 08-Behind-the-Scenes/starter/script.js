'use strict';
/*
// Scoping in practice
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you are a millenial, ${firstName}.`; // this will have Steven, because it is looking for variable inside the current scope
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT!';
    }
    console.log(millenial);
    console.log(output); // this will have NEW OUTPUT variable, because we are reassigning outer scope
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1994);


// Hoisting in Practice
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  // we can use it before declarating
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1; // it is property of the window object
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false


// This keyword in practice
console.log(this); // it is window object

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this); // undefined
};

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this); // window will be result
};

const jonas = {
  year: 1994,
  calcAge: function () {
    console.log(jonas); // resuls is jonas object
    console.log(2024 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // borrowing the function
matilda.calcAge(); // 7

const f = jonas.calcAge;
f(); // this keyword is undefined, there is no owner of the f function


// Regular functions vs. Arrow Functions
const jonas = {
  firstName: 'Jonas',
  year: 1994,
  calcAge: function () {
    console.log(this); // resuls is jonas object
    console.log(2024 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      // arrow function inherits this keyword from parent scope
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};


// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
}; // arrow function doesn't have arguments keyword
*/

// Primitves vs. Objects (Primitive vs. Reference Types)
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend); // age 27
console.log('Me:', me); // age 27

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // shallow copy that copy just firt level of object - in this case without array, this is not deep clone!!!
jessicaCopy.lastName = 'Black';
console.log('Before marriage:', jessica);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica);
console.log('After marriage:', jessicaCopy);
