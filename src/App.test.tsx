import { render } from '@testing-library/react';
import App from './App';

test('renders react app', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
