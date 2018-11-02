import React, { Component } from 'react';
import QuizQuestions from './component/QuizQuestions';
import QuizAnswers from './component/QuizAnswers';
import NextButton from './component/NextButton';
import QuizCounter from './component/QuizCounter';
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
      correct: 0
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
    if (e.target.value === this.state.correctAnswer) {
      this.setState({
        message: "CORRECT !",
        messageClass: 'message message-correct',
        correct: this.state.correct + 1
      })
    } else {
      this.setState({
        message: "WRONG !",
        messageClass: 'message message-wrong'
      })
    }
    if(e.target.checked === true) {
      this.setState({ checked : true})      
    }    
  }

  nextQuestion(e) {
    e.preventDefault();
    const arr = [];
    quiz[this.state.step + 1].answers.map((answer) => arr.push(answer.content))
    this.setState({
      question: quiz[this.state.step + 1].question,
      answers: arr,
      step: this.state.step + 1,
      correctAnswer: quiz[this.state.step + 1].correctAnswer,
      checked : false,
      message: '',
      messageClass: 'message',
      questionNumber: this.state.step + 2
    })
    let inputs = document.getElementsByClassName('answer-inputs');
    for (let i = 0; i < inputs.length; i ++) {
      inputs[i].checked = false;
    }
  }

  render() {   
     console.log(this.state.step);
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
        </div>
      </div>
    )
  }
}