// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === 23) console.log('Prettier 23');

const calcAge = birthYear => 2024 - birthYear;
console.log(calcAge(1997));


//////////////////////////////////////////////////////
// Using Google, StackOverflow and MDN

///// PROBLEM 1: ----------
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  console.log(maxTemp);
  console.log(minTemp);

  return maxTemp - minTemp;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

///// PROBLEM 2: ----------
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeTwo = function (temp1, temp2) {
  const temp = temp1.concat(temp2);

  return calcTempAmplitude(temp);
};
const amplitudeAll = calcTempAmplitudeTwo([3, 5, 1], [9, 5, 0]);
console.log(amplitudeAll);


//////////////////////////////////////////////////////
// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());
*/

//////////////////////////////////////////////////////
// CHALLENGE
/*
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with these temperatures.

Example: [17, 21, 23] will print: "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC 
in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string 
like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into 
sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ...`;
  }
  return `... ${str}`;
};

console.log(printForecast([17, 21, 23, 16, 14, 10, 8, 3, -1]));
