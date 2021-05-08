import { FaTrello } from "react-icons/fa";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <FaTrello color="#fff" size={60} />
      <h1>Trello Cards</h1>
    </Container>
  );
}
