import { render, screen } from '@testing-library/react';
import App from '../App';
import Wish from '../component/Wish';

test('renders Wish Component', () => {
  render(<Wish />);
  const linkElement = screen.getByText(/Welcome to Espark/i);
  expect(linkElement).toBeInTheDocument();
});
