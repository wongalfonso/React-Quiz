import React from 'react';
import PropTypes from 'prop-types';


const QuizQuestions = ({question}) => {
  return (
    <div className = 'questions-container'>    
      <h3>{question}</h3>
    </div>
  )
}

QuizQuestions.propTypes = {
  question: PropTypes.string.isRequired
}

export default QuizQuestions;