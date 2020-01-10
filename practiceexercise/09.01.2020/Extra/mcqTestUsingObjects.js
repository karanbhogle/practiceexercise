currentQuestionNumber = window.sessionStorage.getItem ('current');
score = 0;

Question = function (questionId, questionTitle, options, answer) {
  this.questionId = questionId;
  this.questionTitle = questionTitle;
  this.options = options;
  this.answer = answer;

  this.checkAnswer = function (input) {
    if (input === this.answer) {
      score = window.sessionStorage.getItem ('score');
      score++;
      window.sessionStorage.setItem ('score', score);
    }
  };
};
question = new Question ();

function loadCurrentQuestion () {
  if (currentQuestionNumber == 0) {
    currentQuestionNumber = 1;
    window.sessionStorage.setItem ('current', currentQuestionNumber);
  } else if (currentQuestionNumber == 1) {
    currentQuestionNumber = 2;
    window.sessionStorage.setItem ('current', currentQuestionNumber);
  } else if (currentQuestionNumber == 2) {
    currentQuestionNumber = 3;
    window.sessionStorage.setItem ('current', currentQuestionNumber);
  } else if (currentQuestionNumber == 3) {
    currentQuestionNumber = 4;
    window.sessionStorage.setItem ('current', currentQuestionNumber);
  } else if (currentQuestionNumber == 4) {
    currentQuestionNumber = 5;
    window.sessionStorage.setItem ('current', currentQuestionNumber);
  } else if (currentQuestionNumber == 5) {
    displayResult ();
    currentQuestionNumber = 1;
    window.sessionStorage.setItem ('current', currentQuestionNumber);
  }
}

noOfQuestions1 = [];

function setQuestion () {
  if (currentQuestionNumber == 1) {
    question = new Question (
      1,
      "Who manufactures the car 'SWIFT'?",
      ['MarutiSuzuki', 'Tata', 'Hyundai', 'Kia'],
      'MarutiSuzuki'
    );
    noOfQuestions1.push (question.questionId);
    loadQuestion (question);
  } else if (currentQuestionNumber == 2) {
    question = new Question (
      2,
      "Who manufactures the car 'Hector'?",
      ['MarutiSuzuki', 'MG', 'Hyundai', 'Kia'],
      'MG'
    );
    noOfQuestions1.push (question.questionId);
    loadQuestion (question);
  } else if (currentQuestionNumber == 3) {
    question = new Question (
      3,
      "Who manufactures the car 'Verna'?",
      ['MarutiSuzuki', 'MG', 'Hyundai', 'Kia'],
      'Hyundai'
    );
    noOfQuestions1.push (question.questionId);
    loadQuestion (question);
  } else if (currentQuestionNumber == 4) {
    question = new Question (
      4,
      "Who manufactures the car 'Seltos'?",
      ['MarutiSuzuki', 'MG', 'Hyundai', 'Kia'],
      'Kia'
    );
    noOfQuestions1.push (question.questionId);
    loadQuestion (question);
  } else if (currentQuestionNumber == 5) {
    question = new Question (
      5,
      "Who manufactures the car 'Nano'?",
      ['Tata', 'MG', 'Hyundai', 'Kia'],
      'Tata'
    );
    noOfQuestions1.push (question.questionId);
    loadQuestion (question);
  } else if (currentQuestionNumber == 6) {
    question = new Question (
      1,
      "Who manufactures the car 'SWIFT'?",
      ['MarutiSuzuki', 'Tata', 'Hyundai', 'Kia'],
      'MarutiSuzuki'
    );
    noOfQuestions1.push (question.questionId);
    loadQuestion (question);
  }
}

function loadQuestion (question) {
  document.getElementById ('question').innerHTML =
    'Q' + question.questionId + '. ' + question.questionTitle;
  document.getElementById ('option1Value').innerHTML = question.options[0];
  document.getElementById ('option2Value').innerHTML = question.options[1];
  document.getElementById ('option3Value').innerHTML = question.options[2];
  document.getElementById ('option4Value').innerHTML = question.options[3];
}

function submitAnswer () {
  rightAnswer = question.answer;
  if (document.getElementById ('option1').checked) {
    inputtedAnswer = question.options[0];
    question.checkAnswer (inputtedAnswer);
  } else if (document.getElementById ('option2').checked) {
    inputtedAnswer = question.options[1];
    question.checkAnswer (inputtedAnswer);
  } else if (document.getElementById ('option3').checked) {
    inputtedAnswer = question.options[2];
    question.checkAnswer (inputtedAnswer);
  } else if (document.getElementById ('option4').checked) {
    inputtedAnswer = question.options[3];
    question.checkAnswer (inputtedAnswer);
  }
  loadCurrentQuestion ();
}

function displayResult () {
  score = window.sessionStorage.getItem ('score');
  alert ('You have scored ' + score + ' out of ' + noOfQuestions1[0]);
  currentQuestionNumber = 1;
  score = 0;
  window.sessionStorage.setItem ('score', score);
  setQuestion ();
}
