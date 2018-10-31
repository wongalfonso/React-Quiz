import React, { Component } from 'react';
import QuizQuestions from './component/QuizQuestions';
import QuizAnswers from './component/QuizAnswers';
import quiz from './quizQuestions.js';
import '../css/style.scss';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: '',
      answers: []
    }

  }
  componentWillMount() {
    const arr = [];
    quiz[0].answers.map((answer) => arr.push(answer.content));    
    this.setState({
      question: quiz[0].question,
      answers: arr,
      correctAnswer: quiz[0].correctAnswer
    })
  }
  

  render() {
    console.log(this.state.correctAnswer)
    return (
      <div className = 'quiz'>
        <div className="quiz-header">
          React Quiz
        </div>
        <div className="container">          
          <QuizQuestions
            question = {this.state.question}
            />
          <QuizAnswers
            answers = {this.state.answers}          
          />
        </div>
      </div>
    )
  }
}