#!/usr/bin/node
const { argv } = require('node:process');
const numbers = [];
// if (Number.isNaN(Number(argv[2])) || argv[2] === undefined) {
//  return 0;
// }
argv.forEach((val, index) => {
  const num = Number(val);
  if (!Number.isNaN(num)) {
    numbers.push(num);
  }
});
const sortedNumbers = numbers.sort((a, b) => b - a);
if (sortedNumbers[1] === undefined) {
  console.log(0);
} else {
  console.log(sortedNumbers[1]);
}
