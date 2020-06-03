import React, { Component } from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../redux/selectors/expenses-selector'
import { DateRangePicker } from 'react-dates'
import {
  SetTextFilter,
  SortByDate,
  SortByAmount,
  SetEndDateFilter,
  SetStartDateFilter
} from '../redux/actions/filters'
class ExpensesFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focusedInput: null
    }
    this.filterExpenses = this.filterExpenses.bind(this)
    this.filterExpensesBy = this.filterExpensesBy.bind(this)
  }
  filterExpensesBy (e) {
    const value = e.target.value
    if (value === 'date') this.props.dispatch(SortByDate())
    if (value === 'amount') this.props.dispatch(SortByAmount())
  }
  filterExpenses (e) {
    e.preventDefault()
    const inputValue = document.getElementById('filter').value
    this.props.dispatch(SetTextFilter(inputValue))
  }

  render () {
    return (
      <div>
        <div>
          <span>Sort Expenses By &nbsp; </span>
          <select id='sort' onChange={this.filterExpensesBy}>
            <option value='amount'>Amount</option>
            <option value='date'>Date</option>
          </select>
          <DateRangePicker
            startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
            startDateId='your_unique_start_date_id' // PropTypes.string.isRequired,
            endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
            endDateId='your_unique_end_date_id' // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {
              this.props.dispatch(SetEndDateFilter(endDate))
              this.props.dispatch(SetStartDateFilter(startDate))
            }} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
        <form onSubmit={this.filterExpenses}>
          <div>
            <input
              id='filter'
              type='text'
              placeholder='filter your expenses by text'
            />
          </div>
          <button type='submit'>filter</button>
        </form>
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

export default connect(getSate)(ExpensesFilter)
