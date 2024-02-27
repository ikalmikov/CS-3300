// 1)Create a variable via a ternary operator that assigns a string based on an expression
var x = 10;
var ternary = (x > 10) ? "x is greater than 10" : "x is less than or equal to 10";
console.log(ternary);
console.log();

// 2)Create an object and loop through its properties, console logging each properties’ value
var characterHealth = {
    head: 10,
    body: 8,
    legs: 6
};
for (var i in characterHealth) {
    console.log(i + ": " + characterHealth[i]);
};
console.log();

// 3)Create an array of numbers. Using the map function, create a second array of thosenumbers squared
var arr = [1,2,3,4,5];
var arr2 = arr.map(num => Math.pow(num, 2));
console.log(arr2);
console.log();