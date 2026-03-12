import React from "react";

interface TableProps {
  data: { name: string; role: string }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "10px" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.name}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;