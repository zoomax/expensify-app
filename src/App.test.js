import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
const greatings = name => `hello ${name}`
// test('renders learn react link', () => {
//   const { getByText } = render(<App />)
//   const linkElement = getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

test('greating', () => {
  let result = greatings('hazem')
  expect(result).toBe('hello hazem')
})
