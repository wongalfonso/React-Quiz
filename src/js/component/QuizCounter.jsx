import React from 'react';
import PropTypes from 'prop-types';

const QuizCounter = ({total, current}) => {
  return (
    <div className = 'counter-text'><i>Question <span className = 'counter'>{current}</span> of {total}</i></div>
  )
}

QuizCounter.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
}

export default QuizCounter;