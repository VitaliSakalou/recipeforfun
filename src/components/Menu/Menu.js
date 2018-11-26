import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

function Menu(props) {
  return (
    <div className="container">
      <nav className="menu">
        <ul className="menu__inner">
          <li className="menu__item">
            <NavLink exact to="/" activeClassName="menu__item--selected">
              Main
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/area" activeClassName="menu__item--selected">
              Area
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/category" activeClassName="menu__item--selected">
              Category
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Menu
