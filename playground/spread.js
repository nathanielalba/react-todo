// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(...toAdd);
// console.log(add(...toAdd));


// var groupA = ['Steffen', 'Christine', 'Nichole'];
// var groupB = ['John'];
// var final = [3, ...groupA];
//
// console.log(final);


var person = ['Nate', 24]
var personTwo = ['Christine', 26];

function greeter(name, age) {
  console.log(`Hi ${name}, you are ${age}`);
}

greeter(...person);
greeter(...personTwo);

var names = ['Steffen', 'Christine', 'Nichole'];
var final = [...names, 'Nate'];
console.log(final);

function greeter2(arr) {
  arr.forEach((name) => {
    console.log(`Hi ${name}`);
  });
}

greeter2(final);
