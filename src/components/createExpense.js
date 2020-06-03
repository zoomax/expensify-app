import React, { Component } from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../redux/selectors/expenses-selector'
import { AddExpense } from '../redux/actions/expenses'
import ExpenseForm from './expenseForm'

class CreateExpense extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (expense) {
    this.props.dispatch(AddExpense(expense))
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <h1>Create Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const getSate = ({ expenses, filters }) => {
  return {
    expenses: getVisibleExpenses(expenses, filters),
    filters
  }
}

export default connect(getSate)(CreateExpense)
