import React from 'react';
import PropTypes from 'prop-types';

const QuizAnswers = ({answers, check, checked}) => {  
  
  const renderQuiz = () => {    
    return (
      <div className = 'answers-container'>      
        {answers.map((answer, i) => {
          return (
            <div key = {i} className = 'answer'>
              <div className = 'form-group'>
                <input type = 'radio' value = {answer} onChange = {check} className = 'answer-inputs'/>
              </div>            
              <label>{answer}</label>            
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
              <input type = 'radio' value = {answer} className = 'answer-inputs' disabled/>
              <label>
              {answer}
              </label>            
            </div>
          )
        })}    
      </div>
    )
  }

  return (  
    <div>
      {(checked !== true) ? renderQuiz() : disableQuiz() }
    </div>
  )
}

QuizAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
  check: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
}

export default QuizAnswers;