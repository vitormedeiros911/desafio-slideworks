import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  flex: 1;
  margin-top: -8rem;
  color: var(--text);
  background: #fff;
  max-width: 580px;
  min-height: 600px;
  border-radius: 0.75rem;
  padding: 30px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);

  h2 {
    font-size: 2.3rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1rem;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.2rem 1rem;
    height: 3.2rem;
    border-radius: 0.3rem;
    background: var(--input);
    border: 1px solid #d7d7d7;
    margin-top: 1rem;
  }

  textarea {
    resize: vertical;
    padding: 1rem 1rem;
    min-height: 10rem;
  }

  select {
    background-color: #fff;
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button[type="submit"] {
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.5rem;

    font-size: 1.3rem;
    margin-top: 1.5rem;
    font-weight: 600;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .add-btn {
    width: 3.5rem;
  }

  .add-btn {
    height: 3.2rem;
    background: #000;
    border-radius: 0.5rem;
    margin-top: 1rem;
    border: 0;
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
  border: 1.2px solid #d7d7d7;

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
    border-color: ${darken(0.5, "#d7d7d7")};
  }
`;
