console.log('=====    assignment    =====')

// LECTURE: Values and Variables
let country = 'America'
let continent = 'North America'
let population = 579
console.log(country)
console.log(continent)
console.log(population)

// LECTURE: Data Types
let isIsland = false
let language
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

// LECTURE: let, const and var
language = 'English'

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
//   then how many people would live in each half?
population / 2

// 2. Increase the population of your country by 1 and log the result to the console
console.log(++population)

// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
population > 6

// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
population < 33

// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'
let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language
console.log(description)

/*// LECTURE: Strings and Template Literals
 // 1. Recreate the 'description' variable from the last assignment, this time
 // using the template literal syntax
 description = `${country} is in ${continent}, and its ${population} million people speak ${language}`*/

/*// LECTURE: Taking Decisions: if / else Statements
 // 1. If your country's population is greater that 33 million, log a string like this to the
 // console: 'Portugal's population is above average'. Otherwise, log a string like
 // 'Portugal's population is 22 million below average' (the 22 is the average of 33
 // minus the country's population)
 if ( population > 33 ) console.log(`${country}'s population is above average`)
 else console.log(`${country}'s population is ${population} million below average`)

 // 2. After checking the result, change the population temporarily to 13 and then to
 // 130. See the different results, and set the population back to original
 population = 13
 if ( population > 33 ) console.log(`${country}'s population is above average`)
 else console.log(`${country}'s population is ${population} million below average`)

 population = 130
 if ( population > 33 ) console.log(`${country}'s population is above average`)
 else console.log(`${country}'s population is ${population} million below average`)

 population = 579*/

/*// LECTURE: Type Conversion and Coercion
 // 1. Predict the result of these 5 operations without executing them:
 // '9' - '5';
 // '19' - '13' + '17';
 // '19' - '13' + 17;
 // '123' < 57;
 // 5 + 6 + '4' + 9 - 4 - 2;
 //===============================
 // '9' - '5'; => 4
 // '19' - '13' + '17'; => 617
 // '19' - '13' + 17; => 23
 // '123' < 57; => false
 // 5 + 6 + '4' + 9 - 4 - 2; => 1149 - 4 - 2 = 1143

 // 2. Execute the operations to check if you were right
 console.log('9' - '5');
 console.log('19' - '13' + '17');
 console.log('19' - '13' + 17);
 console.log('123' < 57);
 console.log(5 + 6 + '4' + 9 - 4 - 2);*/

/*// LECTURE: Equality Operators: == vs. ===
 // 1. Declare a variable 'numNeighbours' based on a prompt input like this:
 // prompt('How many neighbour countries does your country have?');
 let numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

 // 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
 // == for now)
 if ( numNeighbours === 1 ) console.log('Only 1 border!')

 // 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
 // is greater than 1
 else if ( numNeighbours > 1 ) console.log('More than 1 border')

 // 4. Use an else block to log 'No borders' (this block will be executed when
 // 'numNeighbours' is 0 or any other value)
 else console.log('No borders')

 // 5. Test the code with different values of 'numNeighbours', including 1 and 0.
 // 1 => Only 1
 // 0 => No

 // 6. Change == to ===, and test the code again, with the same values of
 // 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
 // is this happening?
 // 1 => No
 // 0 => No

 // 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
 // when you input 1
 // prompt() => Number(prompt())
 // 1 => Only 1
 // 0 => No

 // 8. Reflect on why we should use the === operator and type conversion in this
 // situation
 // 결과가 달라진다*/

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
if ( language === 'English' && population < 50 && isIsland )

  // 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
  // not, log 'Portugal does not meet your criteria :('
  console.log(`You should live in ${country} :)`)
else
  console.log(`${country} does not meet your criteria :(`)

// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)
population = 5
isIsland = !isIsland
if ( language === 'English' && population < 50 && isIsland )

  // 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
  // not, log 'Portugal does not meet your criteria :('
  console.log(`You should live in ${country} :)`)
else
  console.log(`${country} does not meet your criteria :(`)
population = 579
isIsland = !isIsland

// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
switch ( language ) {
  // chinese or mandarin: 'MOST number of native speakers!'
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!')
    break

  // spanish: '2nd place in number of native speakers'
  case 'spanish':
    console.log('2nd place in number of native speakers')
    break

  // english: '3rd place'
  case 'english':
    console.log('3rd place')
    break

  // hindi: 'Number 4'
  case 'hindi':
    console.log('Number 4')
    break

  // arabic: '5th most spoken language'
  case 'arabic':
    console.log('5th most spoken language')
    break

  // for all other simply log 'Great language too :D'
  default:
    console.log('Great language too :D')
}

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)

// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
population = 13
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)
population = 130
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)
population = 579