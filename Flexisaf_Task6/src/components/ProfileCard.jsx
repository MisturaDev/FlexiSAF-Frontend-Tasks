function ProfileCard({ name, role }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;