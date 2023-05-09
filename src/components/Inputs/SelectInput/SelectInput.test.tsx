import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectInput from './SelectInput.component';

describe('SelectInput', () => {
  const value = 'ToDo';
  const onChange = jest.fn();

  it('renders the select input with the correct initial value', () => {
    render(<SelectInput value={value} onChange={onChange} />);
    const select = screen.getByLabelText('Status:') as HTMLSelectElement;
    expect(select.value).toBe(value);
  });

  it('calls the onChange callback when the select input value changes', () => {
    render(<SelectInput value={value} onChange={onChange} />);
    const select = screen.getByLabelText('Status:') as HTMLSelectElement;
    const newValue = 'InProgress';
    userEvent.selectOptions(select, newValue);
    expect(onChange).toHaveBeenCalledWith(newValue);
  });
});
