import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Button from "./components/Button";
import styled from "styled-components";

// Container for the page
const Container = styled.div`
  font-family: "Segoe UI", sans-serif;
  background-color: #f4f6f8;
  min-height: 100vh;
`;

// Header
const Header = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
`;

// Main content
const Main = styled.main`
  padding: 30px;
  text-align: center;
`;

// Card container
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 25px;
`;

// Footer
const Footer = styled.footer`
  margin-top: 40px;
  padding: 15px;
  text-align: center;
  font-size: 0.9rem;
  color: #777;
`;

function App() {
  const [show, setShow] = useState(true);

  return (
    <Container>
      <Header>
        <h1>Styled Components Demo</h1>
        <p>A React mini-app using styled-components</p>
      </Header>

      <Main>
        <h2>About This Project</h2>
        <p>
          This mini-app demonstrates styling React components dynamically
          using styled-components. Buttons and cards are reusable and styled
          with props.
        </p>

        <Button primary onClick={() => setShow(!show)}>
          {show ? "Hide Profiles" : "Show Profiles"}
        </Button>

        {show && (
          <CardsContainer>
            <ProfileCard
              name="Mistura"
              role="Frontend Developer"
              description="Passionate about building clean and interactive UIs."
            />
            <ProfileCard
              name="React Learner"
              role="FlexiSAF Intern"
              description="Currently learning styled-components in React."
            />
          </CardsContainer>
        )}
      </Main>

      <Footer>
        Built with React + styled-components • Task 7 Submission
      </Footer>
    </Container>
  );
}

export default App;