import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ children, variant = 'primary', onClick }) => {
  return (
    <button className={`button button--${variant}`} onClick={(e) => onClick(e)}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'icon', 'add']),
  onClick: PropTypes.func.isRequired
}