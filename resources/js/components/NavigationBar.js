import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar navbar-brand">Red Dice</Link>

        </div>

        <div className="">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}