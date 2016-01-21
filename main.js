//Week 1 - Project 1

// Log all answers to the console and write them to document
// =======================================================

//1. Log your name to the console (as a string).
console.log("Courtney");
//Courtney

//2. Declare a variable called name, log it to the console.
var name = "Courtney Elizabeth";
console.log(name);
//Courtney Elizabeth

//3. Declare two variables with number values. Add, subtract, multiply and divide them.
var num = 10;
var number = 7;

console.log(num + number);
//17
console.log(num - number);
//3
console.log(num * number);
//70
console.log(num / number);
//1.43


//4. Declare two variables with string values. Create a third variable that concatenates them.
var greeting = "Hello";
var subject = "Everyone";
var output = greeting + " "+subject;

console.log(output);
//Hello Everyone

//5. Add, subract, multiply and divide the strings '5' and '3'. Observe and explain the results.
var a = "5";
var b = "3";

console.log(a + b);  
//53
//Combined the strings together.

console.log(a-b);	
//2
//subtracted the second string from the first.

console.log(a*b);  
//15
//multiplied the first number by the second number.

console.log(a/b); 
//1.6666666666666667
//divided the first number by the second.

//6. Create a prompt that asks a user to pick a number. Double the answer.
var game = prompt("Pick a Number.");
//5
alert(game * 2);
//10

//7. Create a custom alert.
alert(" "+ name +", How are you? ")
//Courtney Elizabeth, How are you?

//8. Declare three variables called length, width and height. Calculate area and volume.
var length = 2;
var width = 4;
var height = 6;

var area = length * width;
console.log(area)
//8;
var volume = length * width * height;
console.log(volume);
//48

//9. Ask for a user's name, age and city. In a single command display/log the sentence:
// "My name is...I'm....years old, and I live in....."
var name = prompt("What is your Name?");
var age = prompt("How old are you?");
var city = prompt("What city do you live in?");

alert("My name is "+ name +" I'm "+ age + " years old, and I live in "+ city +" " );
//My name is Courtney, I'm 33 years old, and I live in Denver. 

//10. Create an alert that uses the response from a prompt.
var fruit = prompt("What is your favorite fruit?");
alert(fruit + " are my favorite too!");
