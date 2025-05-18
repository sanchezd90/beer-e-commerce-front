import React from 'react'
import PropTypes from 'prop-types'

function Toggle({ src, alt='toggle', onClick }) {
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

export default Toggle;