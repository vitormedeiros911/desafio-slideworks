import { ToastContainer } from "react-toastify";

import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={5000}
        position="top-right"
        hideProgressBar={false}
        closeOnClick
      />
      <Header />
      <Container>
        <Form />
      </Container>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
