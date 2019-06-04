'use strict';

//Ask for user's name
var usersName = prompt('Hi there! So excited to meet you. What\'s your name?');
console.log('User\'s name is -->' + usersName);


var playGame = confirm('That\'s great, ' + usersName + '! Would you like to play a guessing game to learn a little about me?');

if (playGame) { 
  //Question 1: Guess how many siblings I have, use parseInt

  var howManySiblings = prompt('OK, Q1/5: How many siblings do I have? Hint: Guess a number between 0-10!');
  var numSiblingsGuess = parseInt(howManySiblings);
  console.log('numSiblingsGuess-->', numSiblingsGuess);

  if (numSiblingsGuess === 6) {
    alert('You guessed it! I am the youngest of 7 kids, so I have 6 siblings!');
    console.log('Q1 numSiblings guess is correct.');
  } else {
    alert('Good guess, but nope! I\'m the youngest of 7 children, so I\'ve got 6 siblings! Next question?');
    console.log('Q1 numSiblings guess is incorrect.');
  }

  //Question 2: Guess one sport I love playing, convert what they write to lowercase

  var whichSport = prompt('OK, Q2/5: Name one sport I love playing?');
  var whichSportGuess = whichSport.toLowerCase();
  console.log('whichSportGuess-->', whichSportGuess);

  if (whichSportGuess === 'basketball' || whichSportGuess === 'field hockey' || whichSportGuess === 'pickleball') {
    alert('Wow you are good! I love playing basketball, field hockey, and pickleball too! Awesome job! Let\'s keep going!');
    console.log('Q2 whichSport guess is correct.');
  } else {
    alert('No, I don\'t play ' + whichSport + ' but I really love playing basketball, field hockey, and pickleball too! Let\'s move on to question 3!');
    console.log('Q2 whichSport guess is incorrect.');
  }

  //Question 3: Guess whether (yes or no) I can speak any other languages besides english, convert what they write to lowercase

  var otherLanguageYn = prompt('OK, Q3/5: Do you think I can speak any other languages besides English?');
  var otherLanguageGuess = otherLanguageYn.toLowerCase();
  console.log('otherLanguageGuess-->', otherLanguageGuess);

  if (otherLanguageGuess === 'yes' || otherLanguageGuess === 'y') {
    alert('Great guess! I learned Spanish when I lived in the Dominican Republic! On to question 4!');
    console.log('Q3 otherLanguage guess is correct.');
  } else {
    alert('I don\'t blame you for answering "' + otherLanguageYn + '"! Languages can be challenging to learn! But I was able to learn Spanish when I lived in the Dominican Republic for a few years. Let\'s move on to question 4, shall we?!');
    console.log('Q3 otherLanguage guess is incorrect.');
  }

  //Question 4: Guess where I'm originally from, convert what they write to lowercase

  var whereFrom = prompt('OK, Q4/5: Can you guess where I\'m originally from? Hint: Cheesesteaks and the Liberty Bell :)');
  var whereFromGuess = whereFrom.toLowerCase();
  console.log('whereFromGuess-->', whereFromGuess);

  if (whereFromGuess === 'philadelphia') {
    alert('Great guess, ' + usersName + ', you got it! Philadelphia - the city of brotherly and sisterly love - is where I came from! Ready for the last question, ' + usersName + '?');
    console.log('Q4 whichSport guess is correct.');
  } else {
    alert('No, ' + whereFrom + ' is probably a great place, but I\'m from Philadelphia, the city of brotherly and sisterly love! Ready for your final question?');
    console.log('Q4 whichSport guess is incorrect.');
  }

  //Question 5: Guess whether (yes or no) Italian food is my favorite, convert what they write to lowercase

  var favFoodYn = prompt('OK, Q5/5: Guess yes or no: My favorite food is Italian food.');
  var favFoodYnGuess = favFoodYn.toLowerCase();
  console.log('faveFoodYnGuess-->', favFoodYnGuess);

  if (favFoodYnGuess === 'yes' || favFoodYnGuess === 'y') {
    alert('Sorry! While I love Italian food, my absolute favorite is Indian cuisine! I LOVE palak paneer and garlic naan - SO GOOD! Thanks for playing with me today! :)');
    console.log('Q5 faveFoodYn guess is incorrect.');
  } else {
    alert('No is right! While I love Italian food, my absolute favorite is Indian cuisine! I LOVE palak paneer and garlic naan - SO GOOD! Thanks for playing with me today! :)');
    console.log('Q3 favFoodYn guess is correct.');
  }
}

console.log(playGame);