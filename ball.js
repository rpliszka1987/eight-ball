// Eight ball application

// User name
var userName = "Robert";

// Conditiona statement that checks if user name is there
userName ? console.log(`Hello ${userName} !`) : console.log("Hello");

// Question to ask the ball
var userQuestion = "Will I win the lottery?";

// Logs the name and question to the user.
console.log(userQuestion + " " + userName);

// Generating random number
var randomNumber = Math.floor(Math.random() * 8);

var eightBall = "";

// Conditional statement depending on the random number.
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My source say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

// Log the 8 ball answer to the console.
console.log(eightBall);
