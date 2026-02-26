function ProfileCard({ name, role, description }) {
  const card = {
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div style={card}>
      <h3>{name}</h3>
      <p><strong>{role}</strong></p>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>{description}</p>
    </div>
  );
}

export default ProfileCard;