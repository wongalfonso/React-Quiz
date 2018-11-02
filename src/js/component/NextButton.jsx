import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({checked, next}) => {

  const buttonRender = () => {
    return (
      <button className = 'next-button' onClick = {next}>Next</button>
    )
  }

  const buttonDisabled = () => {
    return (
      <button className = 'next-button' disabled>Next</button>
    )
  }
  return (
    (checked === true) ? buttonRender() : buttonDisabled()
  )
}

NextButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  next: PropTypes.func.isRequired
}
export default NextButton;