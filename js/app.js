'use strict';

//Global variables
var correctAnswerCount = 0;
var numQuestions = 7;
var percentScore = Math.round(correctAnswerCount/numQuestions*100);

//Ask for user's name
var usersName = prompt('Hi there! So excited to meet you. What\'s your name?');
console.log('User\'s name is -->' + usersName);

//Function for y/n questions

function yesNoQuestions() {

  var yesNoQuestionsArray = [q1(),q2(),q3(),q4(),q5()];
  for (var i = 0; i < yesNoQuestionsArray.length; i++) {
    yesNoQuestionsArray[i];
  }
}

//Question 1: Guess whether I can speak any other languages besides english, convert what they write to lowercase

function q1() {
  var otherLanguageYn = prompt('OK, Q1/7: Do you think I can speak any other languages besides English (y/n)?');
  var otherLanguageGuess = otherLanguageYn.toLowerCase();
  console.log('otherLanguageGuess-->', otherLanguageGuess);

  if (otherLanguageGuess === 'yes' || otherLanguageGuess === 'y') {
    correctAnswerCount++;
    alert('Great guess! I learned Spanish when I lived in the Dominican Republic! On to question 2!');
    console.log(correctAnswerCount);
    console.log('Q1 otherLanguage guess is correct.');
  } else {
    alert('I don\'t blame you for answering "' + otherLanguageYn + '"! Languages can be challenging to learn! But I was able to learn Spanish when I lived in the Dominican Republic for a few years. Let\'s move on to question 2, shall we?!');
    console.log('Q1 otherLanguage guess is incorrect.');
  }
}


//Question 2: Am I from Seattle?

function q2() {
  var fromSeattleYn = prompt('Q2/7: Am I from Seattle (y/n)?');
  var fromSeattleGuess = fromSeattleYn.toLowerCase();
  console.log('fromSeattleGuess-->', fromSeattleGuess);

  if (fromSeattleGuess === 'no' || fromSeattleGuess === 'n') {
    correctAnswerCount++;
    alert('Great guess! I am not from Seattle. I moved here from Philadelphia, the city of brotherly and sisterly love! On to question 3!');
    console.log(correctAnswerCount);
    console.log('Q2 fromSeattle guess is correct.');
  } else {
    alert('Nope, I\'m from Philadelphia, the city of brotherly and sisterly love! Let\'s move on to question 3, shall we?!');
    console.log('Q2 fromSeattle guess is incorrect.');
  }
}

//Question 3: Do I play the trumpet?

function q3() {
  var playTrumpetYn = prompt('Q3/7: Do I play the trumpet (y/n)?');
  var playTrumpetGuess = playTrumpetYn.toLowerCase();
  console.log('playTrumpetGuess-->', playTrumpetGuess);

  if (playTrumpetGuess === 'no' || playTrumpetGuess === 'n') {
    correctAnswerCount++;
    alert('Great guess! I do not play the trumpet, but I LOVE music! Ready for question 4?');
    console.log(correctAnswerCount);
    console.log('Q3 playTrumpet guess is correct.');
  } else {
    alert('Nope, I did play it in 3rd grade, but now I just enjoy other people playing - I LOVE music! Let\'s move on to question 4, shall we?!');
    console.log('Q3 playTrumpet guess is incorrect.');
  }
}

//Question 4: Is Italian my favorite food?

function q4() {
  var italianFoodFaveYn = prompt('Q4/7: Is Italian my favorite food (y/n)?');
  var italianFoodFaveGuess = italianFoodFaveYn.toLowerCase();
  console.log('italianFoodFaveGuess-->', italianFoodFaveGuess);

  if (italianFoodFaveGuess === 'no' || italianFoodFaveGuess === 'n') {
    correctAnswerCount++;
    alert('You\'re right! I love Italian, but Indian cuisine is my favorite - love me some palaak paneer and garlic naan! Let\'s keep going.');
    console.log(correctAnswerCount);
    console.log('Q4 italianFoodFave guess is correct.');
  } else {
    alert('No, I like Italian food, but Indian cuisine is my favorite - love me some palaak paneer and garlic naan! Let\'s keep going.');
    console.log('Q4 italianFoodFave guess is incorrect.');
  }
}


//Question 5: Am I the youngest in my family?

function q5() {
  var youngestInFamYn = prompt('Q5/7: Am I the youngest in my family (y/n)?');
  var youngestInFamGuess = youngestInFamYn.toLowerCase();
  console.log('youngestInFamGuess-->', youngestInFamGuess);

  if (youngestInFamGuess === 'yes' || youngestInFamGuess === 'y') {
    correctAnswerCount++;
    alert('You\'re right! I am the youngest. I\'ve got a big family - want to know how many? Try guessing on question 6!');
    console.log(correctAnswerCount);
    console.log('Q5 youngestInFam guess is correct.');
  } else {
    alert('Sorry! I am the youngest. I\'ve got a big family - want to know how many? Try guessing on question 6!');
    console.log('Q5 youngestInFam guess is incorrect.');
  }
}


//Question 6: Guess a number, 4 tries, "too low/high"

function q6() {
  var q6Guesses = 4;
  var guessCount6 = 1;
  var numSiblingsAnswer = 6;
  var howManySiblings = prompt('OK, Q6/7: How many siblings do I have? Hint: Guess a number between 0-10! You\'ve got four chances to get it right!');
  console.log('numSiblingsGuess-->', numSiblingsGuess);

  while (guessCount6 !== q6Guesses) {
    var guessesLeft6 = q6Guesses - guessCount6;
    guessCount6++;

    var numSiblingsGuess = parseInt(howManySiblings);

    if (numSiblingsGuess > numSiblingsAnswer) {
      howManySiblings = prompt('Too high! Guess again, you have ' + guessesLeft6 + ' guesses left.');
      console.log(numSiblingsGuess, 'too high');
    }
    else if (numSiblingsGuess < numSiblingsAnswer) {
      howManySiblings = prompt('Too low! Guess again, you have ' + guessesLeft6 + ' guesses left.');
      console.log(numSiblingsGuess, 'too low');
    }
    else if(numSiblingsGuess === numSiblingsAnswer) {
      correctAnswerCount++;
      alert('YES! I\'m the youngest of 7 children, so I\'ve got 6 siblings! Next question?');
      console.log('Q1 numSiblings guess is correct.');
      break;
    }
    else {
      howManySiblings = prompt('Please provide answer.'); //This is not working; when I put in the right answer it gave me this prompt.
    }
  }
}


//Question 7: Guess one sport I love playing

function q7() {
  var whichSport = prompt('OK, 7/7: Name one sport I love playing?');
  var isInArray = false;
  var q7Guesses = 6;
  var guessCount7 = 1;
  var sports = ['basketball','field hockey','pickleball'];
  console.log('whichSportGuess-->', whichSportGuess);

  while (guessCount7 !== q7Guesses) {
    var guessesLeft7 = q7Guesses - guessCount7;
    guessCount7++;
    console.log('inside the while loop-->');

    for (var i = 0; i < sports.length; i++ ) {
      console.log(sports[i], 'outside the if inside the for loop-->');
      var whichSportGuess = whichSport.toLowerCase();
      if (whichSportGuess === sports[i]) {
        console.log(sports[i]);
        isInArray = true;
        console.log('inside the for loop-->');
      }

    }
    if (isInArray === true) {
      correctAnswerCount++;
      alert('Yes, you guessed it! I love playing basketball, field hockey, and pickleball too! Awesome job!');
      console.log('inside the outer if-->');
      break;
    }

    else if (isInArray === false) {
      whichSport = prompt('Sorry, not one of my favorite sports! Try again. You have ' + guessesLeft7 + ' guesses left!');
      // console.log('whichSportGuess-->', whichSportGuess);
      console.log(whichSport);

      //Game tally

      alert('That\'s the end of the game! You got ' + correctAnswerCount + ' answers out of ' + numQuestions + '! That\'s ' + percentScore + '! Thanks for playing with me, ' + usersName + '! I hope you enjoyed it. Click "OK" to visit my site and learn more.');
    }
  }
}
var playGame = confirm('That\'s great, ' + usersName + '! Would you like to play a guessing game to learn a little about me?');
console.log(playGame);
if (playGame) {

  //Invoke question functions

  yesNoQuestions();
  q6();
  q7();
}
