import React from 'react'
import PropTypes from 'prop-types'

const Pill = ({ text, active=false, onClick }) => {
  return (
    <div className={`pill ${active ? 'pill--active' : ''}`} onClick={onClick}>
        <p className="pill__text">{text}</p>
    </div>
  )
}

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

export default Pill