// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
while (counter < 5) {
  console.log(counter);
  counter++;
}
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let counter2 = 1;
do {
  console.log(counter2);
  counter2++;
} while (counter2 <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let counter3 = 1; counter3 <= 5; counter3++) {
  console.log(counter3);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
while (counter4 >= 1) {
  console.log(counter4);
  counter4--;
}

let counter5 = 10;
do {
  console.log(counter5);
  counter5--;
} while (counter5 >= 1);

for (let counter6 = 10; counter6 >= 1; counter6--) {
  console.log(counter6);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let counter7 = 7;
while (counter7 <= 27) {
  console.log(counter7);
  counter7++;
}

let counter8 = 7;
do {
  console.log(counter8);
  counter8++;
} while (counter8 <= 27);

for (let counter9 = 7; counter9 <= 27; counter9++) {
  console.log(counter9);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let counter10 = 0;
while (counter10 <= 100) {
  console.log(counter10);
  counter10 += 10;
}

let counter11 = 0;
do {
  console.log(counter11);
  counter11 += 10;
} while (counter11 <= 100);

for (let counter12 = 0; counter12 <= 100; counter12 += 10) {
  console.log(counter12);
}
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour--;
}
This loop is an infinite loop because the condition counterFour < 2 will continue to decrease away from 2 with the (--) symbol. To fix it, we will need to change -- to ++ so that the value will move towards 2.

let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour++;
}
// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
let favoriteNumber = 11;
for (let i = 0; i <= 100; i++) {
  if (i === favoriteNumber) {
    console.log(i + " my favorite number!");
  } else {
    console.log(i + " not my favorite number");
  }
} 


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//I reseached a video game reference to help answer this exercise. 
for loop: knowing how many times something will repeat like a player with a set number of lives.
while loop: when you don't know how many times it will run until the condition changes like a playe reaching 0 health at any moment.
do while loop: something happening at least once then deciding if it will repeat like the "start game" menu. If no response, the loading screen will display again.


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++){
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 0; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//Loops were very challenging for me. I need more time to practice and understand the different types of loops and when to use which one in a certain scenario. Researching and finding the video game reference helped a lot. I tend to start off fine, then overthink what goes next.

// Commit your file to GitHub.
