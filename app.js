// the first alert
alert("Hello, world");

// the second alert
alert("Welcome back!");

var youLikeMeat = true;

if (youLikeMeat) {
  document.write("Here is the meat menu");
}

var myNum = 8;

if (myNum == 10) {
  document.write("myNum is equal to 10");
} else {
  document.write("myNum is not equal to 10");
}

var myAge = 27;

if (myAge > 30) {
  document.write("you are over 30");
} else if (myAge > 20) {
  document.write("you are over 20");
} else if (myAge > 10) {
  document.write("you are over 10");
} else {
  document.write("you are not over 10");
}

var yourAge = 25;

if (yourAge >= 18 && yourAge <= 30) {
  document.write("You can come with us!");
} else {
  document.write("You can not join!");
}

var age = 5;

// While Loops

while (age < 10) {
  console.log("Your age is less than 10");
  age++;
}
document.write("You are now over 10");

// For Loops

for (age = 5; age < 10; age++) {
  console.log("Your age is less than 10");
}

document.write("You are now over 10");

var links = document.getElementsByTagName("a");

for (i = 1; i < links.length; i++) {
  console.log("this is link number" + i);
}

document.write("all links now looped");

// Break & Continue

for (i = 0; i < 10; i++) {
  if (i === 5 || i === 3) {
    continue;
  }
  console.log(i);
  if (i == 7) {
    break;
  }
}
console.log("I have broken out of the loop");

// Strings

var myString = 'I am a "fun" string';

/*console.log(myString.length);*/
/*console.log(myString.indexOf("string"));*/
if (myString.indexOf("ninja") === -1) {
  console.log("hello");
} else {
  console.log("goodbye");
}

var string1 = "abc";
var string2 = "ABC";

/*console.log(string1.toLowerCase() === string2.toLocaleLowerCase());*/
console.log(string1 < string2);

// Creating a new JS Object

var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Teo";
myCar.drive = function () {
  console.log("now driving");
};

myCar.drive();

/*var myArray2 = [true, 15, "h1"];*/

var myCar2 = {
  maxSpeed: 70,
  driver: "Teodor",
  drive: function () {
    console.log("now driving");
  },
};

console.log(myCar2.maxSpeed);
myCar2.drive();

/*var myVar = "hello";*/

/*console.log(myCar.driver);

myString.length;*/
