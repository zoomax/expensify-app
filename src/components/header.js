import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = props => (
  <div>
    <h1>Expensify App</h1>
    <p>track your expenses all the time</p>
    <ul>
      <li>
        <NavLink exact={true} activeClassName='active' to='/'>
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink exact={true} activeClassName='active' to='/create-expense'>
          Create Expense
        </NavLink>
      </li>

      <li>
        <NavLink exact={true} activeClassName='active' to='/help'>
          Expense Help
        </NavLink>
      </li>
    </ul>
  </div>
)

export default Header
