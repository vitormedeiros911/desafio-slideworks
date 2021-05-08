import { FaLinkedin, FaGithub, FaTrello, FaFigma } from "react-icons/fa";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <h3>Links</h3>
      <ul>
        <li>
          <FaLinkedin color="#fff" size={25} />
          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/vitormedeiros911/">
            Meu perfil no LinkedIn
          </a>
        </li>
        <li>
          <FaGithub color="#fff" size={25} />
          <a target="_blank" rel='noreferrer' href="https://github.com/vitormedeiros911/desafio-slideworks">
            Repositório no GitHub
          </a>
        </li>
        <li>
          <FaTrello color="#fff" size={25} />
          <a target="_blank" rel='noreferrer' href="https://trello.com/b/vIt55Fy2/desafio-slideworks">
            Board no Trello
          </a>
        </li>
        <li>
          <FaFigma color="#fff" size={25} />
          <a target="_blank" rel='noreferrer' href="https://www.figma.com/file/t3u0flxP7pZUSLbKSapsVi/Desafio-Slideworks?node-id=0%3A1">
            Projeto no Figma
          </a>
        </li>
      </ul>
    </Container>
  );
}
