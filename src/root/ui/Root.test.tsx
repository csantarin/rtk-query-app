import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from './Root';

test('renders', () => {
  render(<Root />);
  const linkElement = screen.getByText(/rtk query app/i);
  expect(linkElement).toBeInTheDocument();
});
