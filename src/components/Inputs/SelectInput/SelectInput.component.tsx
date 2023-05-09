import { FC } from "react";
import { ISelectInput } from "../../../types/Input.types";
import styles from './Select.module.scss'

const SelectInput: FC<ISelectInput> = ({ value, onChange }) => {
    return (
      <label>
        Status:
        <select className={styles.select} value={value} onChange={(e) => onChange?.(e.target.value)}>
          <option value="ToDo">ToDo</option>
          <option value="InProgress">InProgress</option>
          <option value="InQA">InQA</option>
          <option value="Done">Done</option>
        </select>
      </label>
    );
}
  
export default SelectInput