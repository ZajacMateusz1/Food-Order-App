import Header from "./components/Header.tsx";
import { Container } from "@mui/material";
import Card from "./components/MealCard.tsx";
function App() {
  return (
    <>
      <Header></Header>
      <Container sx={{ p: 0 }}>
        <Card />
      </Container>
    </>
  );
}

export default App;
