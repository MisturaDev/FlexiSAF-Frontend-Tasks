import React from "react";

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "10px" }}>
      <input type="checkbox" />
      {label}
    </label>
  );
};

export default Checkbox;