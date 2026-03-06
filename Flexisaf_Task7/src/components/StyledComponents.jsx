import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 40px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 30px auto;
  font-size: 16px;
  line-height: 1.6;
  color: #555;
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 30px;

  &:hover {
    background-color: #005fcc;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Card = styled.div`
  background: #f5f7fa;
  padding: 20px;
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

export const CardTitle = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #666;
`;

export const Footer = styled.footer`
  margin-top: 50px;
  font-size: 14px;
  color: #888;
`;