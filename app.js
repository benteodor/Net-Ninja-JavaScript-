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
  console.log(i);
  if (i == 7) {
    break;
  }
}
