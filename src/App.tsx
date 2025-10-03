import Header from "./components/Header.tsx";
import { Container } from "@mui/material";
function App() {
  return (
    <>
      <Header></Header>
      <Container sx={{ p: 0 }}></Container>
    </>
  );
}

export default App;
