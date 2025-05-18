import React from 'react'
import PropTypes from 'prop-types'

export const Avatar = ({ src, alt='user', onClick }) => {
  return (
    <button className={`avatar`} onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}
