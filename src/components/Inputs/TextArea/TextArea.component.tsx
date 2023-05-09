import React, { FC } from 'react';
import { ITextArea } from '../../../types/Input.types';
import styles from './TextArea.module.scss'

export const Textarea: FC<ITextArea> = ({ label, value, onChange, required, placeholder }) => {
  return (
    <label>
      {label}
      <textarea
        className={styles.textarea}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
};
