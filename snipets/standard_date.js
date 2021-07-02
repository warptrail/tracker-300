// date format

var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
var today = new Date();

console.log(today);
console.log(today.toLocaleDateString('en-US')); // 9/17/2016
console.log(today.toLocaleDateString('en-US', options)); // Saturday, September 17, 2016
