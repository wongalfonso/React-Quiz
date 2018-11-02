import React from 'react';
import PropTypes from 'prop-types';

const CorrectCounter = ({number, correct}) => {

  const renderCounter = () => {
    let percentage = (correct / number) * 100;
    percentage = parseInt(percentage);
    return (
      <div className = 'correct-counter'>
        <span><i>You got {correct} out of {number}</i></span>
        <div className = 'percentage'>Current Score: {percentage} %</div>
      </div>      
    )
  }

  const renderNothing = () => {
    return (
      <div></div>
    )
  }
  return (
    (number !== 0) ? renderCounter() : renderNothing()
  )
}

CorrectCounter.propTypes = {  
  number: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired
}

export default CorrectCounter;