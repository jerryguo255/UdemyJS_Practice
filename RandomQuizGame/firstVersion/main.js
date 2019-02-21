(function randomGame() {
  // 1. Build a function constructor called Question to describe a question. A question should include:
  // a) question itself
  // b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
  // c) correct answer (I would use a number for this)

  // 2. Create a couple of questions using the constructor
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    // this.getQuestionNum = function(){
    //     return function(){
    //        return this.questions;
    //     }
    // }
  };

  Question.prototype.DisplayQuestion = function() {
    console.log(this.question);
    this.answers.forEach(element => {
      console.log(this.answers.indexOf(element) + "." + element);
    });
  };

  Question.prototype.CheckAnswer = function(usersAnswer,callBackFn) {
    if (usersAnswer == this.correctAnswer) {
      console.log("corrent");
      console.log(callBackFn(true));
      console.log("---------------------------");
    } else {
      console.log("incorrent Try again :)");
      console.log(callBackFn(false));
      console.log("----------------x-----------");
    }
  };

  var questions = [];
  questions.push(
    new Question(
      "where is the southest english city?",
      ["Invercargill", "Buenos Aires", "Wuhan"],
      0
    )
  );
  questions.push(
    new Question(
      "where is the southest english city2?",
      ["Invercargill2", "Buenos Aires2", "Wuhan2"],
      0
    )
  );
  questions.push(
    new Question(
      "where is the southest english city3?",
      ["Buenos Aires3", "Invercargill3", "Wuhan3"],
      1
    )
  );
  questions.push(
    new Question(
      "where is the southest english city4?",
      ["Buenos Aires4", "Wuhan4", "Invercargill4"],
      2
    )
  );
  // 3. Store them all inside an array
  // questions[0].DisplayQuestion();
  // questions[0].CheckAnswer();
  function score() {
    var sc = 0;
    return function(corrent) {
      if (corrent) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();
  var StartAQuestions = function() {
    var n = Math.floor(Math.random() * questions.length); // length of array
    questions[n].DisplayQuestion();
    var userAnswer = prompt("enter a number");

    if (userAnswer != "exit") {
      questions[n].CheckAnswer(userAnswer,keepScore);//* send a closure function with  
      // questions.splice(n,1); //remove a element
      // console.log(questions);
      StartAQuestions();
    }
    //questions.slice(questions[n],1)// finally remove the question that alread answered
  };

  // while(questions.length>0){
  //   StartAQuestions(questions.length);
  // }
  StartAQuestions();

  // var userInput = "";
  // var askAQuestion = function() {};
  //var mark = 0;
  // while (questions.length != 0 || userInput == "exit") {
  //   var quenstionsIndex = Math.floor(Math.random() * questions.length); //generate a random number
  //   console.log("." + questions[quenstionsIndex].question); //pop up a question
  //   for (var i = 0; i < questions[quenstionsIndex].answers.length; i++) {
  //     console.log(i + "." + questions[quenstionsIndex].answers[i]);
  //   } //  4. Select one random question and log it on the console, together
  //   //   with the possible answers (each question should have a number)
  //   //   (Hint: write a method for the Question objects for this task).
  //   var userInput = prompt();
  //   var wrong = true;
  //   while (wrong) {
  //     if (userInput == questions[quenstionsIndex].correctAnswer) {
  //       console.log("corrent!");
  //       questions.splice(quenstionsIndex, 1);
  //       wrong = false;
  //       mark++;
  //       if (mark > 1) {
  //         console.log("You've got " + mark + " marks");
  //       } else {
  //         console.log("You've got " + mark + " mark");
  //       }
  //       console.log("======================");
  //     } else {
  //       console.log("wrong! try again!");
  //       if (userInput == "exit") {
  //         break;
  //       }
  //       userInput = prompt();
  //     }
  //   }
  // } // 5. Use the 'prompt' function to ask the user for the correct answer.
  //   The user should input the number of the correct answer such as you displayed it on Task 4.

  // 6. Check if the answer is correct and print to the console whether
  //   the answer is correct ot nor (Hint: write another method for this).

  // while (userInput != "exit") {}
})();

// 7. Suppose this code would be a plugin for other programmers to use in their code.
//   So make sure that all your code is private and  doesn't interfere with the other
//   programmers code (Hint: we learned a special technique to do exactly that).

//   --- Expert level ---

// 8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

// 9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

// 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

// 11. Display the score in the console. Use yet another method for this.
