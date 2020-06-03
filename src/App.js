import React, { Component } from 'react' // (React) must be imported wherever a jsx format is used
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux'
import initAppStore from './redux/redux-store-config'
// actions

import getVisibleExpenses from './redux/selectors/expenses-selector'

import 'normalize.css/normalize.css'
import './App.scss'

const Store = initAppStore()
Store.subscribe(() => {
  const { expenses, filters } = Store.getState()
  console.log(getVisibleExpenses(expenses, filters))
})

class App extends Component {
  render () {
    return (
      <Provider store={Store}>
        <AppRouter />
      </Provider>
    )
  }
}

export default App
