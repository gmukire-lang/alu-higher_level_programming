#!/usr/bin/node
const  { argv } = require('node:process');
const numbers = [];
argv.forEach((val, index) => {
  const num = Number(val);
  if (!Number.isNaN(num)) {
    numbers.push(num);
  }
});
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers[1]);
