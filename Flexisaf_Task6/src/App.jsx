import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [show, setShow] = useState(true);

  const containerStyle = {
    textAlign: "center",
    padding: "40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  };

  const titleStyle = {
    color: "#2c3e50",
    fontSize: "2rem",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    marginBottom: "30px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#3498db",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHover = (e) => (e.target.style.backgroundColor = "#2980b9");
  const buttonLeave = (e) => (e.target.style.backgroundColor = "#3498db");

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>React Intro Task</h1>

      <button
        style={buttonStyle}
        onMouseEnter={buttonHover}
        onMouseLeave={buttonLeave}
        onClick={() => setShow(!show)}
      >
        {show ? "Hide Profiles" : "Show Profiles"}
      </button>

      {show && (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <ProfileCard name="Mistura" role="Frontend Developer" />
          <ProfileCard name="FlexiSAF Intern" role="React Learner" />
        </div>
      )}
    </div>
  );
}

export default App;