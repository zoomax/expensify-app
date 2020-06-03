import moment from 'moment'
const defaultFiltersState = {
  text: '',
  sortBy: 'amount',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

const filterReducer = function (state = defaultFiltersState, action) {
  switch (action.type.trim()) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }
    case 'SET_START_DATE_FILTER':
      return { ...state, startDate: action.startDate }
    case 'SET_END_DATE_FILTER':
      return { ...state, endDate: action.endDate }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: action.sortBy }
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: action.sortBy }
    default:
      return state
  }
}

export default filterReducer
