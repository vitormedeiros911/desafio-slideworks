import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  background: var(--black);
  color: #fff;
  width: 100%;
  height: 13rem;
  display: flex;
  justify-content: center;

  h1 {
    margin-top: 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 3rem;
  }
`;

export const Form = styled.form`
  flex: 1;
  margin-top: -8rem;
  color: var(--text);
  background: #fff;
  max-width: 580px;
  min-height: 720px;
  border-radius: 0.75rem;
  padding: 30px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.3rem;
    margin-top: 0.4rem;
    background: var(--input);
    border: 1px solid #d7d7d7;
    margin-top: 1rem;
  }

  textarea {
    resize: vertical;
    padding: 1.5rem;
    min-height: 10rem;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.5rem;
    border: 0;
    font-size: 1.3rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

interface RowProps {
  numberOfColumns: number;
}

export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    "repeat(" + props.numberOfColumns + ", 1fr)"};
  gap: 0.7rem;
`;

export const Footer = styled.footer`
  background: var(--black);
  color: #fff;
  width: 100%;
  height: 100%;

  padding: 30px 10rem;

  ul {
    list-style-type: none;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
    }

    li {
      margin-top: 1rem;
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (min-width: 720px) {
    ul {
      display: flex;
      align-items: center;

      & li + li {
        margin-left: 3rem;
      }
    }
  }
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "red" | "green" | "blue";
}

const colors = {
  green: "#0c9c1d",
  red: "#e52e4d",
  blue: "#2222bf",
};

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  height: 3.9rem;
  margin-top: 0.4rem;
  border-radius: 0.3rem;
  border: 1px solid #d7d7d7;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.2, colors[props.activeColor])
      : "transparent"};

  color: ${(props) => (props.isActive ? "#fff" : "#353535")};

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 1.2rem;
  }

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.2, "#d7d7d7")};
  }
`;
