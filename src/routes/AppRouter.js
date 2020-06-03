import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpensifyHelp from '../components/expensifyHelp'
import Dashboard from '../components/dashboard'
import CreateExpense from '../components/createExpense'
import Header from '../components/header'
import NotFoundComponent from '../components/notFoundComponent'
import EditExpensePage from '../components/editExpense'

const router = props => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Dashboard} />
        <Route path='/help' exact={true} component={ExpensifyHelp} />
        <Route path='/create-expense' exact={true} component={CreateExpense} />
        <Route
          path='/edit-expense/:id'
          exact={true}
          component={EditExpensePage}
        />
        <Route component={NotFoundComponent} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default router
