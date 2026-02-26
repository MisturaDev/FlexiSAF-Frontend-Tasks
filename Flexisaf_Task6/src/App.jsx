import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>React Intro Task</h1>

      <button onClick={() => setShow(!show)}>
        Toggle Profiles
      </button>

      {show && (
        <>
          <ProfileCard name="Mistura" role="Frontend Developer" />
          <ProfileCard name="FlexiSAF Intern" role="React Learner" />
        </>
      )}
    </div>
  );
}

export default App;