import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Header';
import Landing from './Landing';


test('renders learn react link', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/^Hello.*$/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Sign-In/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/^\w+\s*\w*$/i);
  expect(linkElement).toBeInTheDocument();
});



