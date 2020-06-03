const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  const filteredArray = expenses.filter(expense => {
    const startDateMatch =
      typeof startDate === 'number' || expense.createdAt >= startDate
    const endDateMatch =
      typeof endDate === 'number' || expense.createdAt <= endDate
    const textMatch = expense.description
      .toLowerCase()
      .includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  })

  switch (sortBy) {
    case 'amount':
      return filteredArray.sort((x, y) => x.amount - y.amount)
    case 'date':
      return filteredArray.sort((x, y) => x.createdAt - y.createdAt)
    default:
      return filteredArray
  }
}

export default getVisibleExpenses
