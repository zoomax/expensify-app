import React, { Component } from 'react'
import { connect } from 'react-redux'

import { EditExpense } from '../redux/actions/expenses'
import ExpenseForm from './expenseForm'

class EditExpensePage extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    if (!this.props.expense) {
      this.props.history.push('/404')
    }
  }

  onSubmit (expense) {
    console.log(this.props)
    this.props.dispatch(EditExpense({ ...expense, id: this.props.expense.id }))
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const getSate = ({ expenses, filters }, props) => {
  return {
    expense: expenses.find(item => item.id === props.match.params.id)
  }
}

export default connect(getSate)(EditExpensePage)
//connect() method
