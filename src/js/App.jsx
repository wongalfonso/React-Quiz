import React, { Component } from 'react';
import QuizQuestions from './component/QuizQuestions';
import QuizAnswers from './component/QuizAnswers';
import NextButton from './component/NextButton';
import QuizCounter from './component/QuizCounter';
import CorrectCounter from './component/CorrectCounter';
import quiz from './quizQuestions.js';
import '../css/style.scss';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: '',
      answers: [],
      correctAnswer: '',
      step: 0,
      message: '',
      messageClass: 'message',
      checked: false, 
      quizLength: 0,
      questionNumber: 1,
      correct: 0,
      questionsAnswered: 0,
      wrongAnswers: [],
      correctAnswers: []
    }
    this.checkAnswer = this.checkAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }
  componentWillMount() {
    const arr = [];
    quiz[0].answers.map((answer) => arr.push(answer.content));    
    this.setState({
      question: quiz[0].question,
      answers: arr,
      correctAnswer: quiz[0].correctAnswer, 
      quizLength: quiz.length
    })
  }
  checkAnswer(e) {    
    let correctObj = {};  
    let correctArr = [];  
    let wrongObj = {};    
    let wrongArr = [];
    if (e.target.value === this.state.correctAnswer) {
      correctObj.question = this.state.question;
      correctObj.answer = this.state.correctAnswer;
      this.state.correctAnswers.map((correct) => {
        correctArr.push(correct);
      })      
      correctArr.push(correctObj);
      this.setState({
        message: "CORRECT !",
        messageClass: 'message message-correct',        
        correctAnswers: correctArr
      })
    } else {
      wrongObj.question = this.state.question;
      wrongObj.yourAnswer = e.target.value;
      wrongObj.correctAnswer = this.state.correctAnswer;
      this.state.wrongAnswers.map((wrong) => {
        wrongArr.push(wrong);
      })
      wrongArr.push(wrongObj);
      this.setState({
        message: "WRONG !",
        messageClass: 'message message-wrong',
        wrongAnswers: wrongArr
      })
    }
    if(e.target.checked === true) {
      this.setState({ checked : true})      
    }    
  }

  nextQuestion(e) {
    e.preventDefault();
    let arr = []; 
    quiz[this.state.step + 1].answers.map((answer) => arr.push(answer.content))
    let correctTotal = this.state.correct;
    if (this.state.message == "CORRECT !") {
      correctTotal = correctTotal + 1;
      }     
    this.setState({
      question: quiz[this.state.step + 1].question,
      answers: arr,
      step: this.state.step + 1,
      correctAnswer: quiz[this.state.step + 1].correctAnswer,
      checked : false,
      message: '',
      messageClass: 'message',
      questionNumber: this.state.step + 2,
      questionsAnswered: this.state.questionsAnswered + 1,
      correct : correctTotal
    })
    let inputs = document.getElementsByClassName('answer-inputs');
    for (let i = 0; i < inputs.length; i ++) {
      inputs[i].checked = false;
    }
  }
  renderQuiz() {    
    return (
    <div className = 'quiz'>
      <div className="quiz-header">
        React Quiz
      </div>
      <div className="container">  
        <QuizCounter
          total = {this.state.quizLength}
          current = {this.state.questionNumber}
        />        
        <QuizQuestions
          question = {this.state.question}
          />
        <QuizAnswers
          answers = {this.state.answers}  
          checked = {this.state.checked}        
          check = {this.checkAnswer}
        />
        <div className = {this.state.messageClass}>{this.state.message}</div>   
        <NextButton 
          checked = {this.state.checked}
          next = {this.nextQuestion}
        />   
        <CorrectCounter
          number = {this.state.questionsAnswered}
          correct = {this.state.correct}
        />     
      </div>
    </div>
    )
  }
  renderAnswers() {
    let percentage = (this.state.correct/this.state.questionsAnswered) * 100;
    percentage = parseInt(percentage);
    return (
      <div className = 'all-answers'>
        <div className = 'ass-answers-percentage'>You Scored a {percentage}%</div>
        <div className = 'all-answers-header'>You got these answers right
        </div>
        <div className = 'correct-table'>          
            {this.state.correctAnswers.map((correct, i) => {
              return (
                <div className = 'table-body' key = {i}>
                  <div className = 'question'>{correct.question}</div>
                  <div>Your Answer: <span className = 'correct-answer'>{correct.answer}</span></div>
                </div>     
              )
            })}    
        </div>   
        <div className = 'all-answers-header'>You got these answers wrong</div>
        <div className = 'wrong-table'>          
            {this.state.wrongAnswers.map((wrong, i) => {
              return (
                <div className = 'table-body' key = {i}>
                  <div className = 'question'>{wrong.question}</div>
                  <div>You Selected: <span className = 'wrong-answer'></span>{wrong.yourAnswer}</div>
                  <div className = 'correct-answer'>{wrong.correctAnswer}</div>                  
                </div>
              )
            })}          
        </div>
      </div>
    )
  }
  render() {  
    console.log(this.state.step + 1);
    return (
      (this.state.step + 1 > this.state.quizLength) ? this.renderAnswers() : this.renderQuiz()
    )
  }
}