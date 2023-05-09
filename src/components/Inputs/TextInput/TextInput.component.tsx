import { FC } from "react";
import { ITextInput } from "../../../types/Input.types";
import styles from "./TextInput.module.scss"

const TextInput: FC<ITextInput> = ({ label, value, onChange, required, placeholder }) => {
    return (
      <label>
        {label}:
        <input 
            data-testid="inputId"
            type="text" 
            value={value} 
            onChange={onChange} 
            required={required}
            placeholder={placeholder}
            className={styles.input}
        />
      </label>
    );
}

export default TextInput