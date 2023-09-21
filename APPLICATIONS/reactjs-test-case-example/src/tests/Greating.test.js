import { render, screen } from '@testing-library/react';
import Greating from '../component/Greating';

test('renders Greating Component', () => {
  render(<Greating name={"adarsh kumar"} />);
  const linkElement = screen.getByText(/Welcome to Espark adarsh kumar/i);
  expect(linkElement).toBeInTheDocument();
});
