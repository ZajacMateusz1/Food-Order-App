import MealContextProvider from "../store/MealContextProvider.tsx";
import Header from "./components/Header.tsx";
import Menu from "./components/Menu.tsx";
import Footer from "./components/Footer.tsx";
import { Container } from "@mui/material";
function App() {
  return (
    <>
      <MealContextProvider>
        <Header></Header>
        <Container>
          <Menu />
        </Container>
      </MealContextProvider>
      <Footer />
    </>
  );
}

export default App;
