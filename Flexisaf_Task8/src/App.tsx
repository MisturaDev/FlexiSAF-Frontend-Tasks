import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Form from "./components/Form";
import DataCard from "./components/DataCard";
import Table from "./components/Table";

const App: React.FC = () => {
  const sampleData = [
    { name: "Mistura", role: "Frontend Developer" },
    { name: "React Learner", role: "FlexiSAF" },
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>Task 8 – Reusable Components in React</h1>
      <p>Practice building reusable UI components</p>

      <Form />
      <br />

      <Input placeholder="Enter something..." />
      <br />

      <Checkbox label="Accept Terms" />
      <br />

      <Button primary onClick={() => alert("Button Clicked!")}>
        Click Me
      </Button>

      <h2>Data Cards</h2>
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        {sampleData.map((item, idx) => (
          <DataCard key={idx} name={item.name} role={item.role} />
        ))}
      </div>

      <h2>Sample Table</h2>
      <Table data={sampleData} />
    </div>
  );
};

export default App;
