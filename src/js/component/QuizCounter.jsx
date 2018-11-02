import React from 'react';
import PropTypes from 'prop-types';

const QuizCounter = ({total, current}) => {
  return (
    <div>{current} of {total}</div>
  )
}

QuizCounter.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
}

export default QuizCounter;