//===>FILTERS GENERATORS
//SET_TEXT_FILTER
const SetTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

//SET_START_DATE_FILTER
const SetStartDateFilter = (startDate = 0) => ({
  type: 'SET_START_DATE_FILTER',
  startDate
})
//SET_START_DATE_FILTER
const SetEndDateFilter = (endDate = new Date().getTime()) => ({
  type: 'SET_END_DATE_FILTER',
  endDate
})

const SortByDate = () => {
  return {
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  }
}
// SORT_BY_AMOUNT

const SortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  }
}

export {
  SortByAmount,
  SortByDate,
  SetEndDateFilter,
  SetStartDateFilter,
  SetTextFilter
}
