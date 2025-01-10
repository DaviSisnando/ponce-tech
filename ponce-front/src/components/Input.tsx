import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  errorMessage = "",
  required = false,
}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <StyledInput
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onInvalid={(e) => {
          if (e.currentTarget.validity.valueMissing) {
            e.currentTarget.setCustomValidity(errorMessage)
          } else {
            e.currentTarget.setCustomValidity("")
          }
        }
        }
        required={required}
      />
    </div>
  );
};

export default Input;
