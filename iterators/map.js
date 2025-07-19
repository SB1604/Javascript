//auto return ( doesn't nned an explicit return )

const nums=[1,2,3,4,5,6,7,8,9,10]

const double = nums.map(num => num * 2);
console.log(double); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const square = nums.map(num => num ** 2);
console.log(square); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


const names = ['Alice', 'Bob', 'Charlie'];
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames); // ['ALICE', 'BOB', 'CHARLIE']

//chaining of map and filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSquares = numbers
  .filter(num => {
    return num % 2 === 0}) // Filter even numbers
  .map(num => num ** 2); // Square the filtered numbers
console.log(evenSquares); // [4, 16, 36, 64, 100]