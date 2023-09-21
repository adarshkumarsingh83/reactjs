import { render, screen } from '@testing-library/react';
import Table from '../component/Table';

test('renders Table Component', () => {

  const data = [
    { name: "adarsh", age: 19, gender: "Male" },
    { name: "radha", age: 19, gender: "Female" },
    { name: "sonu", age: 25, gender: "Male" },
  ]

  render(<Table data={data} />);
  const linkElement = screen.getByText(/adarsh/i);
  expect(linkElement).toBeInTheDocument();
});
