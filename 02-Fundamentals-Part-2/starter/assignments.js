// JavaScript Fundamentals – Part 2
// Note: Please start Part 2 from scratch and comment out all the code from Part 1.

// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

class Country {
  constructor(name, population, capitalCity) {
    this.name = name
    this.population = population
    this.capitalCity = capitalCity
    this.description = describeCountry(name, population, capitalCity)
  }
}

// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console
const USA = new Country('USA', 319, 'Washington D.C.')
const India = new Country('India', 1408, 'New Delhi')
const Korea = new Country('Korea', 50, 'Seoul')

console.log(USA.description)
console.log(India.description)
console.log(Korea.description)

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
function percentageOfWorld1(population) {
  const WORLD_POPULATION = 7900
  return Math.round(population / WORLD_POPULATION * 1000) / 10
}

// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
let usaPOW1 = percentageOfWorld1(USA.population)
let indiaPOW1 = percentageOfWorld1(India.population)
let koreaPOW1 = percentageOfWorld1(Korea.population)

console.log(usaPOW1, indiaPOW1, koreaPOW1)

// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)
const percentageOfWorld2 = function(population) {
  const WORLD_POPULATION = 7900
  return Math.round(population / WORLD_POPULATION * 1000) / 10
}
let usaPOW2 = percentageOfWorld2(USA.population)
let indiaPOW2 = percentageOfWorld2(India.population)
let koreaPOW2 = percentageOfWorld2(Korea.population)

console.log(usaPOW2, indiaPOW2, koreaPOW2)

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'
const percentageOfWorld3 = population => {
  const WORLD_POPULATION = 7900
  return Math.round(population / WORLD_POPULATION * 1000) / 10
}

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
const populations = [ 1, 2, 3, 4 ]

// 2. Log to the console whether the array has 4 elements or not (true or false)
console.log(populations.length === 4)

// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values
const percentages = populations.map(population => percentageOfWorld1(population))

// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
const neighbours = [ 'China', 'Korea', 'Japan' ]

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
neighbours.push('Utopia')

// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
neighbours.pop()

// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
if ( neighbours.includes('Germany') )
  console.log('Probably not a central European country :D')

// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
// The Complete JavaScript Course 16
neighbours[neighbours.indexOf('Korea')] = 'Republic of Korea'

// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)
const myCountry = {
  country: 'US',
  capital: 'Washington D.C.',
  language: 'English',
  population: '333',
  neighbours: [
    'Canada',
    'Mexico',
    'Russia'
  ]
}

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.
myCountry.population -= 2
myCountry['populations'] -= 2

// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
myCountry.describe = function() {
  console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
}

// 2. Call the 'describe' method
myCountry.describe()

// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.
myCountry['checkIsland'] = () => {
  return this.isIsland = neighbours.length === 0 ? true : false
}

// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
for ( let i = 1; i < 51; i++ ) {
  console.log(`(for numbers ${i} to 50: 'Voter number ${i} is currently voting`)
}

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
const percentages2 = []
for ( let i = 0; i < populations.length; i++ ) {
  percentages2.push(percentageOfWorld1(populations[i]))
}

// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is
let i = 0
for ( i = 0; i < percentages.length; i++ ) {
  if ( percentages[i] !== percentages2[i] ) break
}
console.log(i === percentages.length)

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
const listOfNeighbours = [ [ 'Canada', 'Mexico' ], [ 'Spain' ], [ 'Norway', 'Sweden', 'Russia' ] ]

// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
for ( let i = 0; i < listOfNeighbours.length; i++ )
  for ( let j = 0; j < listOfNeighbours[i].length; j++ ) {
    for ( let k = 0; k < listOfNeighbours[i].length; k++ ) {
      if ( j === k ) continue
      console.log(`Neighbor: ${listOfNeighbours[i][k]}`)
    }
  }

// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway


// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
const percentages3 = []
i = 0
while ( i < populations.length ) {
  percentages3.push(percentageOfWorld1(populations[i]))
  i++
}

// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?