import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test("react renders product container", () => {
  render(<App/>)
  const product = screen.getByText("Products");
  expect(product).toBeInTheDocument()
})

test("react render feedback form", () => {
  render(<App/>)
  const formHeading = screen.getByText("Feedback Form")
  expect(formHeading).toBeInTheDocument()
})

test("fire click event", () => {
  render(<App/>)

  const input = screen.getByPlaceholderText("Enter your feedback")
  const value = "Test feedback"
  fireEvent.change(input, { target: value }); 

  const submitBtn = screen.getByRole("button")
  fireEvent.click(submitBtn)
  
  const successNotify = screen.getByText("Thanks for submitting the feedback!!")
  expect(successNotify).toBeInTheDocument()
})



