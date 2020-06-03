import { v1 as uuid } from 'uuid'
import moment from 'moment'
const AddExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = moment().valueOf()
} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      note,
      description,
      amount,
      createdAt
    }
  }
}
// REMOVE_EXPENSE
const RemoveExpense = ({ id }) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}
// EDIT_EXPENSE
const EditExpense = ({ id, amount, description, note }) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    amount,
    description,
    note
  }
}

export { EditExpense, AddExpense, RemoveExpense }
