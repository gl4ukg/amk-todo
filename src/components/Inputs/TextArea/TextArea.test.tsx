import { render, screen } from '@testing-library/react';
import { Textarea } from './TextArea.component';

describe('Textarea', () => {
  const label = 'Textarea Label';
  const value = 'Textarea Value';
  const placeholder = 'Textarea Placeholder';
  const onChange = jest.fn();
  const required = true;

  test('renders with label', () => {
    const label = 'My Textarea Label';
    render(<Textarea label={label} value="" onChange={() => {}} required={false} placeholder="Enter text here" />);

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  it('renders textarea with value', () => {
    render(
      <Textarea label={label} value={value} onChange={onChange} required={required} placeholder={placeholder} />
    );
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue(value);
  });

  test('renders with placeholder', () => {
    const placeholder = 'Enter text here';
    render(<Textarea label="My Textarea Label" value="" onChange={() => {}} required={false} placeholder={placeholder} />);
    
    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toBeInTheDocument();
    
    const placeholderText = screen.queryByPlaceholderText(placeholder);
    expect(placeholderText).toBeInTheDocument();
  });

  it('renders textarea with required attribute', () => {
    render(
      <Textarea label={label} value={value} onChange={onChange} required={required} placeholder={placeholder} />
    );
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeRequired();
  });
});
