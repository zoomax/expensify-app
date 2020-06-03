import { RemoveExpense, EditExpense } from '../../redux/actions/expenses'

test('removing expense', () => {
  expect(RemoveExpense({ id: '23232ff' })).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '23232ff'
  })
})

// test('adding expense', () => {
//   expect(RemoveExpense({ id: '23232ff' })).toEqual({
//     type: 'REMOVE_EXPENSE',
//     id: '23232ff'
//   })
// })

test('editing expense', () => {
  expect(
    EditExpense({
      id: '23232ff',
      amount: 10,
      description: 'rent',
      note: 'rent expense'
    })
  ).toEqual({
    type: 'EDIT_EXPENSE',
    id: '23232ff',
    amount: 10,
    description: 'rent',
    note: 'rent expense'
  })
})
