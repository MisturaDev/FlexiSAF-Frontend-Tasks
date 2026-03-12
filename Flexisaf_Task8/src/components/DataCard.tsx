import React from "react";

interface DataCardProps {
  name: string;
  role: string;
}

const DataCard: React.FC<DataCardProps> = ({ name, role }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      width: "180px",
      textAlign: "center"
    }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default DataCard;