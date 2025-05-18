import React from 'react'

const Nav = ({children}) => {
  return (
    <nav className="nav">
        {children}
    </nav>
  )
}

Nav.propTypes = {
    children: PropTypes.node.isRequired
}

export default Nav