const defaultExpensesState = []
const expensesReducer = function (state = defaultExpensesState, action) {
  const newState = [].concat(state)
  switch (action.type.trim()) {
    case 'ADD_EXPENSE':
      return [...newState.map(item => item), action.expense]
    case 'REMOVE_EXPENSE':
      return [
        ...newState.filter(item => {
          return item.id !== action.id
        })
      ]
    case 'EDIT_EXPENSE':
      const item = newState.find(item => {
        return item.id === action.id
      })
      item.note = action.note
      item.description = action.description
      item.amount = action.amount
      return [...newState.map(item => item)]
    default:
      return state
  }
}

export default expensesReducer
