let weightMark, heightMark, weightJohn, heightJohn, BMIMark, BMIJohn, markHigherBMI

/* Test 1
 * Mark weights 78 kg and is 1.69 m tall.
 * John weights 92 kg and is 1.95 m tall.
 */

/*
 * 1. Print a nice output to the console, saying who has the higher BMI. The message
 * is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
 * 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
 * BMI (28.3) is higher than John's (23.9)!"
 * Hint: Use an if/else statement �
 */

weightMark = 78
heightMark = 1.69
weightJohn = 92
heightJohn = 1.95
BMIMark = weightMark / (heightMark * heightMark)
BMIJohn = weightJohn / (heightJohn * heightJohn)
markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn);

if ( markHigherBMI ) console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
else console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)