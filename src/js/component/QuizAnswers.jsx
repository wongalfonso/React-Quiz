import React from 'react';
import PropTypes from 'prop-types';

const QuizAnswers = ({answers, check, checked}) => {  
  
  const renderQuiz = () => {    
    return (
      <div className = 'answers-container'>      
        {answers.map((answer, i) => {
          return (
            <div key = {i} className = 'answer'>
              <label>
                <input type = 'radio' value = {answer} onChange = {check} className = 'answer-inputs'/>
              {answer}
              </label>            
            </div>
          )
        })}    
      </div>
    )
  }
  const disableQuiz = () => {
    return (
      <div className = 'answers-container'>      
        {answers.map((answer, i) => {
          return (
            <div key = {i} className = 'answer'>
              <label>
                <input type = 'radio' value = {answer} className = 'answer-inputs' disabled/>
              {answer}
              </label>            
            </div>
          )
        })}    
      </div>
    )
  }

  return (  
    (checked !== true) ? renderQuiz() : disableQuiz() 
  )
}

QuizAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
  check: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
}

export default QuizAnswers;