let weightMark, heightMark, weightJohn, heightJohn, BMIMark, BMIJohn, markHigherBMI

/* Test 1
 * Mark weights 78 kg and is 1.69 m tall.
 * John weights 92 kg and is 1.95 m tall.
 */
weightMark = 78
heightMark = 1.69
weightJohn = 92
heightJohn = 1.95
BMIMark = weightMark / (heightMark ** 2)
BMIJohn = weightJohn / (heightJohn ** 2)
markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark)
console.log(BMIJohn)
console.log(markHigherBMI)
// console.log('Test 1 markHigherBMI: ', markHigherBMI)

/* Test 2
 * Mark weights 95 kg and is 1.88 m tall.
 * John weights 85 kg and is 1.76 m tall.
 */
weightMark = 95
heightMark = 1.88
weightJohn = 85
heightJohn = 1.76
BMIMark = weightMark / (heightMark ** 2)
BMIJohn = weightJohn / (heightJohn ** 2)
markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark)
console.log(BMIJohn)
console.log(markHigherBMI)
// console.log('Test 2 markHigherBMI: ', markHigherBMI)
