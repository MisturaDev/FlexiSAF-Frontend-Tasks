function ProfileCard({ name, role }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    width: "200px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  };

  const nameStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: "5px",
  };

  const roleStyle = {
    fontSize: "1rem",
    color: "#7f8c8d",
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p style={roleStyle}>{role}</p>
    </div>
  );
}

export default ProfileCard;