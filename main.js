'use strict';
var numCorrect = 0;
var userName;
//function to ask name 
var uName = function () {
  userName = prompt('Welcome to my site, what is your name?');

  console.log(userName);
};

uName();
//
var rocks = function () {
  var bouldering = prompt('Howdy ' + userName + '. Did Karl recently try out bouldering?'); //Question ONE
  console.log(bouldering);

  if (bouldering.toLowerCase() === 'yes' || bouldering.toLowerCase() === 'yee') {
    alert('Good job! yes, I did recently get a membership to Stone Gardens.');
    numCorrect++;
  } else if (bouldering === 'no') {
    alert('Yeah that\'s not the right answer.');
  } else {
    alert('It\'s a simple yes or no.');
  }
}
rocks();

//
var kats = function () {

  var kitty = prompt('What kind of pet would Karl like to get in the next year?'); //Question TWO
  console.log(kitty);

  if (kitty.toLowerCase() === 'cat' || kitty.toLowerCase() === 'kitty') {
    alert('Yes indeedy, Karl wants to get a kitty!');
    numCorrect++;
  } else if (kitty.toLowerCase() === 'dog') {
    alert('That is clearly not a cat. Karl wants a cat.');
  } else {
    alert(kitty + 's are cool, but Karl wants a cat.');
  }

};
kats();

//
var univ = function () {

  var skoo = prompt('What University did Karl go to?'); //Question THREE
  console.log(skoo);

  if (skoo.toLowerCase() === 'uw' || skoo.toLowerCase() === 'university of washington') {
    alert('You\'re right, Karl is a proud Husky!');
    numCorrect++;
  } else if (skoo.toLowerCase() === 'wsu' || skoo.toLowerCase() === 'washington state university') {
    alert('That\'s very funny. Karl went to UW.');
  } else {
    alert('That is not the school that I went to.');
  }

};
univ();

//
var homeTownFunc = function () {
  var homeTown = prompt('What city was Karl born in?'); //Question FOUR
  console.log(homeTown);

  switch (homeTown.toLowerCase()) {

  case 'los angeles' || 'la':
    alert('That is the correct city!');
    numCorrect++;
    break;
  case 'la':
    alert('That is the correct city!');
    numCorrect++;
    break;
  case 'seattle':
    alert('I\'ve lived here for almost 25 years, but I wasn\'t born here!');
    break;
  case 'renton':
    alert('That\'s where my family is!');
    break;
  case 'phoenix':
    alert('Now you\'re just guessing.');
    break;
  default:
    alert('That city is unfortunately incorrect.');
    break;
  }
};
homeTownFunc();

//Question FIVE
var clr = function () {

  do {
    var color = prompt('What is Karl\'s favorite color?');
    console.log(color);
    if (color !== 'orange') {
      color = alert('Please try again!');
    } else {
      numCorrect++;
    }
  } while (color.toLowerCase() !== 'orange');

  
};
clr();

//Lab 03 Additions

//Question SIX - Guess what day of the month I was born on!
//Sounds like a FOR loop to be able to give the user up to 4 guesses.
//For guessing to high/low a number, it'd make sense to use an ELSE/IF, but I know there's a more elegant method.
//BONUS: Make the question generate a random number to guess instead.
var bDay = function(){
  var dayAns = 24;
  for (var i = 4; i > 0; i--) {
    var iTxt = i.toString();
    var day = prompt('Now guess which day of the month I was born on! You have ' + iTxt + ' guesses.');
    var dayNum = parseInt(day);

    if (dayNum === dayAns) {
      alert('Hey, that\'s the right answer.');
      numCorrect++;
      break;
    } else if (dayNum > dayAns) {
      alert('That number is too high.');
    } else if (dayNum < dayAns) {
      alert('Please enter a higher number.');
    } else {
      alert('Please enter a number!');
    }
  }
  if (dayNum !== dayAns) {
    alert('That\'s incorrect, let\'s move on to the next question.');
  }
  console.log(day);
}
bDay();

//Question SEVEN - has multiple possible correct answers stored in an array.
//Six tries to get a correct answer - so another FOR loop?
//Rick driving
var allTheGames = function(){
  var favGames = ['overwatch', 'minecraft', 'fortnite', 'titanfall', 'mario kart', 'mega man'];
  var ansCorrect = false;
  var guessCount = 6;
  do {

    var gamesAnswer = prompt('Guess one of my favorite games:');
    for (var i = 0; i < favGames.length; i++) {
      if (favGames[i] === gamesAnswer) {
        ansCorrect = true;
      
      }
    }
    if (ansCorrect) {
      alert('Correct! Overwatch, Minecraft, Fortnite, Titanfall, Mario Kart, and Mega Man are my favorite games.');
      numCorrect++;
    } else {
      alert('Nice try, guess again.');
    }
    guessCount--;

  } while (guessCount > 0 && !ansCorrect);
  if (!ansCorrect) {
    alert('Too bad. Overwatch, Minecraft, Fortnite, Titanfall, Mario Kart, and Mega Man are my favorite games.');
  }

  console.log(gamesAnswer);
};
allTheGames();

//BONUS: Make an array that runs through all of the functions. (my start at it below, will add in if time is available.)
// var questions = [rocks(), kats(), univ(), homeTownFunc(), clr(), bDay(), allTheGames()];

//Final - add up the number of correct answers and display to the user.
//BONUS: make another HTML file with the questions, and fill the answers in after the user provides answers.
alert('You got ' + numCorrect + ' out of 7.');
console.log(numCorrect);
