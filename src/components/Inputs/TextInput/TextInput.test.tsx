import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import TextInput from './TextInput.component';

describe('TextInput', () => {
  const label = 'Input Label';
  const placeholder = 'Enter text here';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with label', () => {
    render(
      <TextInput
        label={label}
        value=""
        onChange={() => {}}
        required={false}
        placeholder={placeholder}
      />,
    );
    const labelElement = screen.getByText(`${label}:`);
    expect(labelElement).toBeInTheDocument();
  });

  test('calls onChange when input value changes', () => {
    const onChange = jest.fn();
    const newValue = 'New Input Value';

    render(<TextInput label={label} value="" onChange={onChange} required={false} placeholder="Enter text here" />);
    const input = screen.getByTestId("inputId");

    fireEvent.change(input, { target: { value: newValue } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  

  it('renders input with required attribute', () => {
    render(
      <TextInput
        label={label}
        value=""
        onChange={() => {}}
        required
        placeholder={placeholder}
      />,
    );
    const input = screen.getByTestId('inputId');
    expect(input).toHaveAttribute('required');
  });

  it('renders input with placeholder', () => {
    render(
      <TextInput
        label={label}
        value=""
        onChange={() => {}}
        required={false}
        placeholder={placeholder}
      />,
    );
    const input = screen.getByTestId('inputId');
    expect(input).toHaveAttribute('placeholder', placeholder);
  });
});
