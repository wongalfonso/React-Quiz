import React from 'react';


const QuizQuestions = ({question}) => {
  return (
    <div className = 'questions-container'>    
      <h3>{question}</h3>
    </div>
  )
}

export default QuizQuestions;