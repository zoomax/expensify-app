import React from 'react'
import { connect } from 'react-redux'
import Expense from './expense'
import getVisibleExpenses from '../redux/selectors/expenses-selector'
import ExpensesFilter from './expensesFilter'

const Dashboard = props => (
  <div>
    <h1>Expenses List Dashboard</h1>
    <div>
      <ExpensesFilter />
    </div>
    <div>
      {props.expenses.length > 0 &&
        props.expenses.map((item, index) => (
          <Expense key={index} expense={item} />
        ))}
      {props.expenses.length === 0 && <p>No Expenses to be shown !</p>}
    </div>
  </div>
)

const getState = ({ expenses, filters }) => ({
  expenses: getVisibleExpenses(expenses, filters),
  filters
})

export default connect(getState)(Dashboard)
