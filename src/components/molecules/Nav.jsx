import React from 'react'
import PropTypes from 'prop-types'

export const Nav = ({children}) => {
  return (
    <nav className="nav">
        {children}
    </nav>
  )
}

Nav.propTypes = {
    children: PropTypes.node.isRequired
}
