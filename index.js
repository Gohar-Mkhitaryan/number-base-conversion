//1. Given an array whose elements are numbers.
//Create a function that will accept a numeric array and return the smallest element of the array

// const arr = [5, 78, 12, -6, -7, 12, 33, 752, -552];
// const minElemOfArr = (numArr) => {
//   let min = numArr[0];
//   for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] < min) {
//       min = numArr[i];
//     }
//   }
//   return min;
// };
// console.log(minElemOfArr(arr));

//   Convert  base-2 to base-10.

// let bynaryNum = "100000000";
// const convertToBaseTen = (num) => {
//   let dec = 0,
//     i = 0,
//     rem;

//   while (num != 0) {
//     rem = num % 10;
//     num = parseInt(num / 10);
//     dec += rem * Math.pow(2, i);
//     ++i;
//   }

//   return dec;
// };

// console.log(convertToBaseTen(bynaryNum));

// without function
// let num = "1010";
// console.log(parseInt(num, 2));

//3. Given an array whose elements are numbers.
//Create a function that will accept an array of text elements and return a new array containing the elements that start with an uppercase letter.

// const arr = ["Suren", "apple", "Armenia", "pear", "France"];

// const firstLetterUppercase = (convertArr) => {
//   let newArr = [];
//   for (let word of convertArr) {
//     if (word[0] === word[0].toUpperCase()) {
//       newArr.push(word);
//     }
//   }
//   return newArr;
// };

// console.log(firstLetterUppercase(arr));

//4. Convert  base-10 to base-2.

// let num = prompt("Put a number from Base 10 to convert to base 2");
// function convertToBinary(x) {
//   let bin = 0;
//   let i = 1;

//   while (x != 0) {
//     let rem = x % 2;
//     x = parseInt(x / 2);
//     bin = bin + rem * i;
//     i = i * 10;
//   }
//   console.log(`Binary: ${bin}`);
// }

// convertToBinary(num);
