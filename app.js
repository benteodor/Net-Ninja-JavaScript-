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

/*var myCar2 = {
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

/*var myCar = {
  maxSpeed: 70,
  driver: "Teo",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  logDriver: function () {
    console.log("driver name is" + this.driver);
  },
};*/

var Car = function (maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function (speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function () {
    console.log("driver name is" + this.driver);
  };
};

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(40, "Teo");
var myCar3 = new Car(90, "Marius");
var myCar4 = new Car(80, "Dana");

myCar.drive(30, 5);
myCar3.logDriver();

// Syntax Basics & Types

let age = 27;
let year = 2019;

// log things to console
// console.log(age, year);

/* age = 30; 
console.log(age);

const points = 100;
console.log(points);*/

var score = 75;
console.log(score);

// strings

console.log("hello, world");

/*let email = "teodor.popa@gmail.com";*/
console.log(email);

// string concatenation

let firstName = "Teodor";
let lastName = "Popa";

let fullName = firstName + " " + lastName;
console.log(fullName);

// getting characters

console.log(fullName[2]);

// string length

console.log(fullName.length);

// string methods

console.log(fullName.toUpperCase());
/*let result = fullName.toLowerCase();*/

let index = email.indexOf("@");
console.log(index);

// common string methods

let email = "teodor.popa96@gmail.com";

// let result = email.lastIndexOf("n");

// let result = email.slice(0, 5);

// let result = email.substring(0, 10);

// let result = email.replace("m", "w");

// let result = email.replace("n", "w");

console.log(result);

// Numbers

let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %

//console.log(10 / 2);
//let result = radius % 3;
//let result = pi * radius ** 2;

// order of operation - T E O D O R

//let result = 5 * (10 - 3) ** 2;

//console.log(result);

//let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;

likes += 10;

// console.log(likes);

// NaN - not a number

// console.log(5 / "hello");
// console.log(5 * "hello");

// let result = "the blog has" + likes + "likes";
console.log(result);

// template strings
const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

// concatenation way
//let result =
//"The blog called" + title + "by" + author + "has" + likes + "likes";
//console.log(result);

// template string way
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
/*let html = 
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>

console.log(html);*/

let ninjas = ["shaun", "ryu", "chun-li"];
/*ninjas[1] = "ken";
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ["shaun", "crystal", 30, 20];
console.log(random);

console.log(ninjas.length);*/

// array methods

//let result = ninjas.join(",");

//let result = ninjas.indexOf("chun-li");
let result = ninjas.concat(["ken", "crystal"]);

console.log(result);

// function declaration

function greet() {
  console.log("hello there");
}

// function expression

/*const speak = function () {
  console.log("good day!");
};

// greet();
speak();*/

// arguments & parameters
const speak = function (name) {
  console.log(`good day ${name}`);
};
speak("mario");
