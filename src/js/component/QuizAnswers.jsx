import React from 'react';
import PropTypes from 'prop-types';

const QuizAnswers = (answers) => {  
  console.log(answers.answers[0]);
  return (
    <div className = 'answers-container'>      
      {answers.answers.map((answer, i) => {
        return (
          <div key = {i} className = 'answer'>
            <label>
              <input type = 'radio'/>
              {answer}
            </label>            
          </div>
        )
      })}    
    </div>
  )
}

QuizAnswers.propTypes = {
  answers: PropTypes.array.isRequired
}

export default QuizAnswers;