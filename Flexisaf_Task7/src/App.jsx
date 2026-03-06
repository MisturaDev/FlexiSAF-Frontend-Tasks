import React, { useState } from "react";
import {
  Container,
  Title,
  Description,
  CardContainer,
  Card,
  CardTitle,
  CardText,
  Button,
  Footer
} from "./components/StyledComponents";

function App() {
  const [showTips, setShowTips] = useState(false);

  return (
    <Container>
      <Title>Styled Components in React</Title>

      <Description>
        This mini React application demonstrates how to style components using
        the styled-components library. It shows how styles can be written
        inside JavaScript and attached directly to React components.
      </Description>

      <Button onClick={() => setShowTips(!showTips)}>
        {showTips ? "Hide Learning Tips" : "Show Learning Tips"}
      </Button>

      {showTips && (
        <CardContainer>
          <Card>
            <CardTitle>Reusable Components</CardTitle>
            <CardText>
              Styled components can be reused across different parts of an
              application, helping maintain consistent UI design.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Dynamic Styling</CardTitle>
            <CardText>
              Styles can change dynamically using props, allowing components to
              adapt based on application state or user interaction.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Cleaner Code Structure</CardTitle>
            <CardText>
              Combining styling and logic in one place helps developers keep
              projects organized and easier to maintain.
            </CardText>
          </Card>
        </CardContainer>
      )}

      <Footer>
        React + Styled Components Practice Project | FlexiSAF Frontend Task 7
      </Footer>
    </Container>
  );
}

export default App;