import { createStore, combineReducers } from 'redux'
import filterReducer from '../redux/reducers/filters'
import expensesReducer from '../redux/reducers/expenses'

const initAppStore = () => {
  const AppReduxStore = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    })
  )
  return AppReduxStore
}

export default initAppStore
