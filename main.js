'use strict';

var userName = prompt('Welcome to my site, what is your name?');
console.log(userName);


var bouldering = prompt('Howdy ' +userName+ '. Did Karl recently try out bouldering?'); //Question ONE
console.log(bouldering);

if(bouldering.toLowerCase() === 'yes' || bouldering.toLowerCase() === 'yee'){
  alert('Good job! yes, I did recently get a membership to Stone Gardens.');
} else if (bouldering ==='no'){
  alert('Yeah that\'s not the right answer.');
} else {
  alert('It\'s a simple yes or no.');
}

var kitty = prompt('What kind of pet would Karl like to get in the next year?'); //Question TWO
console.log(kitty);

if(kitty.toLowerCase() === 'cat' || kitty.toLowerCase() === 'kitty'){
  alert('Yes indeedy, Karl wants to get a kitty!');
} else if (kitty.toLowerCase() === 'dog'){
  alert('That is clearly not a cat. Karl wants a cat.');
} else {
  alert(kitty +'s are cool, but Karl wants a cat.');
}

var skoo = prompt('What University did Karl go to?'); //Question THREE
console.log(skoo);

if(skoo.toLowerCase() === 'uw' || skoo.toLowerCase() === 'university of washington'){
  alert('You\'re right, Karl is a proud Husky!');
} else if (skoo.toLowerCase() === 'wsu'|| skoo.toLowerCase() === 'washington state university'){
  alert('That\'s very funny. Karl went to UW.');
} else {
  alert('That is not the school that I went to.');
}

var homeTown = prompt('What city was Karl born in?'); //Question FOUR
console.log(homeTown);

switch (homeTown.toLowerCase()) {

case 'los angeles':
  alert('That is the correct city!');
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
  alert('Please enter something.');
  break;
}

var color = prompt('What is Karl\'s favorite color?'); //Question FIVE
console.log(color);

while (color.toLowerCase() !=='orange'){
  color = prompt('Please try again!');
}
