import React, { Component } from 'react'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'

class ExpenseForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      createdAt: this.props.expense
        ? moment(this.props.expense.createdAt)
        : this.props.createdAt,
      amount: this.props.expense
        ? this.props.expense.amount
        : this.props.amount,
      note: this.props.expense ? this.props.expense.note : this.props.note,
      description: this.props.expense
        ? this.props.expense.description
        : this.props.description,
      isPickerFocused: this.props.isPickerFocused,
      error: ''
    }
    console.log(this.props)
    this.submitForm = this.submitForm.bind(this)
    this.setAmount = this.setAmount.bind(this)
    this.setDescription = this.setDescription.bind(this)
    this.setNote = this.setNote.bind(this)
    this.setDate = this.setDate.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }
  submitForm (e) {
    e.preventDefault()
    const { amount, description, createdAt, note } = this.state

    if (amount && description) {
      this.setState(() => ({
        error: ''
      }))

      return this.props.onSubmit({
        description,
        amount,
        note,
        createdAt: createdAt.valueOf()
      })
    } else {
      let error = 'please provide description and amount'

      this.setState(() => ({
        error
      }))

      alert(error)
      return
    }
  }
  setDate (createdAt) {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }))
    }
  }
  onFocusChange ({ focused }) {
    console.log(this.state)
    this.setState(() => ({
      isPickerFocused: focused
    }))
  }
  setAmount (e) {
    e.preventDefault()
    let amount = e.target.value
    if (amount && amount.match(new RegExp(/^\d{1,}(\.\d{0,2})?$/))) {
      this.setState(() => {
        return { amount }
      })
    }
  }
  setDescription (e) {
    e.preventDefault()
    let description = e.target.value
    this.setState(() => {
      return { description }
    })
  }
  setNote (e) {
    e.preventDefault()
    let note = e.target.value
    this.setState(() => ({
      note
    }))
  }
  render () {
    return (
      <div>
        <h1>Create Expense</h1>
        <form onSubmit={this.submitForm}>
          <div>
            <input
              id='description'
              onChange={this.setDescription}
              type='text'
              placeholder='description'
              value={this.state.description}
            />
          </div>
          <div>
            <input
              id='amount'
              onChange={this.setAmount}
              type='text'
              placeholder='amount'
              value={this.state.amount}
            />
          </div>

          <div>
            <input
              id='note'
              onChange={this.setNote}
              type='text'
              placeholder='note'
              value={this.state.note}
            />
          </div>
          <div>
            <SingleDatePicker
              date={this.state.createdAt}
              focused={this.state.isPickerFocused}
              onDateChange={this.setDate}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
            />
            }
          </div>
          <button type='submit'>
            {this.props.expense ? 'Edit Expense' : 'Add Expense'}
          </button>
        </form>
      </div>
    )
  }
}
ExpenseForm.defaultProps = {
  createdAt: moment(),
  amount: '',
  note: '',
  description: '',
  isPickerFocused: false,
  error: ''
}

export default ExpenseForm
