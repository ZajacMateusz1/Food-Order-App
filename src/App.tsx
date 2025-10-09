import CartContextProvider from "../store/CartContextProvider.tsx";
import Header from "./components/Header.tsx";
import Menu from "./components/Menu.tsx";
import Footer from "./components/Footer.tsx";
import { Container } from "@mui/material";
import OrderModal from "./components/OrderModal/OrderModal.tsx";
function App() {
  return (
    <>
      <CartContextProvider>
        <Header></Header>
        <Container>
          <Menu />
        </Container>
        <OrderModal />
      </CartContextProvider>
      <Footer />
    </>
  );
}

export default App;
