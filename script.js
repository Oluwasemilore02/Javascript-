let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let massMark2 = 95;
let massJohn2 = 85;
let heightMark2 = 1.88;
let heightJohn2 = 1.76;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let BMIMark2 = massMark2 / (heightMark2 * heightMark2);
let BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

console.log(BMIMark2);
console.log(BMIJohn2);

console.log(BMIMark);
console.log(BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(markHigherBMI2);
