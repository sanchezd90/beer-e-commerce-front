import React from 'react'
import PropTypes from 'prop-types'

export const Toggle = ({ src, alt='toggle', onClick }) => {
  return (
    <button className="toggle" onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  )
}

Toggle.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired
}
