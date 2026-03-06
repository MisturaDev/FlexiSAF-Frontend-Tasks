import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 5px;
  border: none;
  background-color: ${props => (props.primary ? "#3498db" : "#7f8c8d")};
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;