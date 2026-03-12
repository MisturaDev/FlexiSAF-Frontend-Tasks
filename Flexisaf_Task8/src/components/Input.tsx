import React from "react";

interface InputProps {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "250px",
        marginTop: "10px",
      }}
    />
  );
};

export default Input;