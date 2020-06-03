import React from 'react'
import { RemoveExpense } from '../redux/actions/expenses'
import { connect } from 'react-redux'
import getVisibleExpenses from '../redux/selectors/expenses-selector'
import { Link } from 'react-router-dom'
import moment from 'moment'

const removeExpense = props => {
  return e => {
    e.preventDefault()
    props.dispatch(RemoveExpense(props.expense))
  }
}

const Expense = props => {
  const { amount, description, id, note, createdAt } = props.expense
  return (
    <div>
      <h2>{description}</h2>
      <ul>
        <li>
          <strong>Id :</strong>
          {id}
        </li>
        <li>
          <strong>Amount : </strong>
          {amount}
        </li>

        <li>
          <strong>Notes : </strong>
          {note === '' ? 'No Notes' : note}
        </li>
        <li>
          <strong>Created At:</strong>
          {moment(createdAt).format()}
        </li>
        <li>
          <button type='button' onClick={removeExpense(props)}>
            Remove Expense details
          </button>
          <Link to={`/edit-expense/${id}`}>Edit Expense</Link>
        </li>
      </ul>
    </div>
  )
}
const getSate = ({ expenses, filters }) => {
  return {
    expenses: getVisibleExpenses(expenses, filters),
    filters
  }
}

export default connect(getSate)(Expense)
