import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button.component';

describe('Button', () => {
  const onClick = jest.fn();
  const buttonText = 'Click me';
  const icon = <svg>Mocked Icon</svg>; 

  it('renders correctly', () => {
    render(<Button onClick={onClick} text={buttonText} icon={icon} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button');
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    render(<Button onClick={onClick} text={buttonText} icon={icon} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('adds the transparent class when isTransparent is true', () => {
    render(<Button onClick={onClick} text={buttonText} icon={icon} isTransparent />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button', 'button__transparent');
  });
});
