
(function randomGame (){
    
    var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };
  // 1. Build a function constructor called Question to describe a question. A question should include:
  // a) question itself
  // b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
  // c) correct answer (I would use a number for this)
  
  
  var question1 = new Question(
    "where is the southest english city?",
    ["Invercargill", "Buenos Aires", "Wuhan"],
    0
  );
  
  var question2 = new Question(
      "where is the southest english city2?",
    ["Invercargill2", "Buenos Aires2", "Wuhan2"],
    0
  );
  var question3 = new Question(
    "where is the southest english city3?",
    ["Invercargill3", "Buenos Aires3", "Wuhan3"],
    0
  );
  // 2. Create a couple of questions using the constructor
  
  var questions = [];
  questions.push(question1);
  questions.push(question2);
  questions.push(question3);
  // 3. Store them all inside an array
  
  
  var quenstionNum = Math.floor(Math.random() * 3); //generate a random number
  console.log(questions[quenstionNum].question);
  
  for(var i = 0; i < questions[quenstionNum].answers.length;i++){   
  console.log(i+'.'+questions[quenstionNum].answers[i]);
  }
  if(prompt() == questions[quenstionNum].correctAnswer ){
      console.log('corrent!');
  }else {
      console.log('wrong!')
  }

})();
  //  4. Select one random question and log it on the console, together 
  //   with the possible answers (each question should have a number) 
  //   (Hint: write a method for the Question objects for this task).
  
  // 5. Use the 'prompt' function to ask the user for the correct answer. 
  //   The user should input the number of the correct answer such as you displayed it on Task 4.
  
  // 6. Check if the answer is correct and print to the console whether 
  //   the answer is correct ot nor (Hint: write another method for this).
  
  // 7. Suppose this code would be a plugin for other programmers to use in their code. 
  //   So make sure that all your code is private and  doesn't interfere with the other 
  //   programmers code (Hint: we learned a special technique to do exactly that).

