import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";

interface FormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "280px",
      }}
    >
      <Input placeholder="Full name" />
      <Input placeholder="Email address" />
      <Checkbox label="Subscribe to updates" />
      <Button primary>Submit</Button>
    </form>
  );
};

export default Form;
