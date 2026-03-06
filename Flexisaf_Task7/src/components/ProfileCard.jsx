import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function ProfileCard({ name, role, description }) {
  return (
    <Card>
      <h3>{name}</h3>
      <p><strong>{role}</strong></p>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>{description}</p>
    </Card>
  );
}

export default ProfileCard;