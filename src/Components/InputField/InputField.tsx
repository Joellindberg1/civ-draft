import React from "react";

import './InputField.scss'

interface InputFieldProps {
    label: string;
    id: string;
    value: number;
    onChange: (value:number)=> void;
    min?: number;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, value, onChange, min = 1 }) => {
    return (
      <div className="inputContainer">
        <label className="label" htmlFor={id}>{label}</label>
        <input
          id={id}  
          type="number"
          className="input"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
        />
      </div>
    );
  };

export default InputField;
