import { useState } from "react";

import { GlobalStyle } from "./styles/global";
import { Container, Header, Form, Footer, RadioBox, Row } from "./styles";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<String[]>([]);
  const [status, setStatus] = useState("");

  function handleCreateCard() {}

  return (
    <>
      <Header>
        <h1>Trello Cards</h1>
      </Header>
      <Container>
        <Form>
          <h2>Criar Card no Trello</h2>

          <Row numberOfColumns={2}>
            <div className="inputContainer">
              <h3>Nome</h3>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="inputContainer">
              <h3>E-mail</h3>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </Row>

          <h3>Descrição</h3>
          <textarea
            name="descricao"
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Digite a descrição do card..."
          >
            {description}
          </textarea>

          <h3>Adicionar Tags</h3>

          <h3>Status da tarefa</h3>
          <Row numberOfColumns={3}>
            <RadioBox
              type="button"
              onClick={() => setStatus("Iniciado")}
              isActive={status === "Iniciado"}
              activeColor="blue"
            >
              <span>Iniciado</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => setStatus("Pendente")}
              isActive={status === "Pendente"}
              activeColor="red"
            >
              <span>Pendente</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => setStatus("Finalizado")}
              isActive={status === "Finalizado"}
              activeColor="green"
            >
              <span>Finalizado</span>
            </RadioBox>
          </Row>
          <button type="submit" onClick={handleCreateCard}>
            Cadastrar
          </button>
        </Form>
      </Container>
      <Footer>
        <h3>Links</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/vitormedeiros911/">
              Meu perfil no LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vitormedeiros911/">
              Repositório no GitHub
            </a>
          </li>
          <li>
            <a href="https://trello.com/b/vIt55Fy2/desafio-slideworks">
              Board no Trello
            </a>
          </li>
          <li>
            <a href="https://www.figma.com/file/t3u0flxP7pZUSLbKSapsVi/Desafio-Slideworks?node-id=0%3A1">
              Projeto no Figma
            </a>
          </li>
        </ul>
      </Footer>
      <GlobalStyle />
    </>
  );
}

export default App;
