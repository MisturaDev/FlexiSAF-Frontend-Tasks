import React from "react";

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ primary, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: primary ? "#0077ff" : "#ccc",
        color: primary ? "white" : "black",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;