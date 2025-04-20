import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o título de login', () => {
  render(<App />);
  const titulo = screen.getByText(/login/i);
  expect(titulo).toBeInTheDocument();
});

