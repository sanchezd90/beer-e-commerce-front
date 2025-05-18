import React from 'react'
import PropTypes from 'prop-types'

export const Avatar = ({ src, alt='user' }) => {
  return (
    <div className={`avatar`}>
      <img src={src} alt={alt} />
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}
