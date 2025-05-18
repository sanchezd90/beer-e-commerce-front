import React from 'react'
import PropTypes from 'prop-types'
import star from '../../assets/icons/star.svg'

export const Rating = ({ rating }) => {
  return (
    <div className="rating">
        <img src={star} alt="star" className="rating__star" />
        <p className="rating__text">{rating}</p>
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired
}
