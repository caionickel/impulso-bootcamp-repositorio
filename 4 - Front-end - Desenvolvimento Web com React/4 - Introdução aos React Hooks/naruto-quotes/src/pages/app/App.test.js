import { rest } from 'msw'
import { setupServer } from 'msw/lib/node'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App } from "./App"

const response = { speaker: 'Speaker test', quote: 'Quote test'}

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.resetHandlers())
afterAll(() => server.close())

test('renders the app with a quote and a button', () => {
  render(<App />)

  const buttonEl = screen.getByRole('button')
  const imageEl = screen.getByRole('img')
  const textEl = screen.getByText(/loading speaker/)

  expect(buttonEl).toBeInTheDocument()
  expect(imageEl).toBeInTheDocument()
  expect(textEl).toBeInTheDocument()
})

test('calls api on button click and update its text', async () => {
  render(<App />)

  const buttonEl = screen.getByRole('button')
  fireEvent.click(buttonEl)

  const quoteEl = await screen.findByText(response.quote)

  expect(quoteEl).toBeInTheDocument()
})