import React, { SelectHTMLAttributes } from "react";
import { SelectBlock } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <SelectBlock>
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} {...rest}>
        <option value="" disabled hidden>
          Seleciona uma opção
        </option>
        {options.map(({ value, label }) => {
          return (
            <option key={`${value}-${label}`} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </SelectBlock>
  );
};

export default Select;
