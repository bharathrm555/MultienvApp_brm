import { render, screen } from '@testing-library/react';
import App from './App';

test('renders environment selection heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/welcome to multi-environment application/i);
  expect(headingElement).toBeInTheDocument();
});
