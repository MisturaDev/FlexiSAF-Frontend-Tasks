import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [show, setShow] = useState(true);

  const container = {
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
  };

  const header = {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "20px",
    textAlign: "center",
  };

  const main = {
    padding: "30px",
    textAlign: "center",
  };

  const button = {
    padding: "10px 20px",
    marginTop: "15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#3498db",
    color: "#fff",
    cursor: "pointer",
  };

  const footer = {
    marginTop: "40px",
    padding: "15px",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#777",
  };

  return (
    <div style={container}>
      <header style={header}>
        <h1>React Fundamentals Project</h1>
        <p>A simple app demonstrating core React concepts</p>
      </header>

    
      <main style={main}>
        <h2>About This Project</h2>
        <p>
          This mini application was built as part of my React learning journey.
          It demonstrates reusable components, props, state management,
          event handling and conditional rendering using modern React.
        </p>

        <button style={button} onClick={() => setShow(!show)}>
          {show ? "Hide Profiles" : "Show Profiles"}
        </button>

        {show && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "25px",
            }}
          >
            <ProfileCard
              name="Mistura"
              role="Frontend Developer"
              description="Passionate about building clean and user-friendly interfaces."
            />
            <ProfileCard
              name="React Learner"
              role="FlexiSAF Intern"
              description="Currently learning React fundamentals and component architecture."
            />
          </div>
        )}
      </main>

      <footer style={footer}>
        Built with React + Vite • Task 6 Submission
      </footer>
    </div>
  );
}

export default App;