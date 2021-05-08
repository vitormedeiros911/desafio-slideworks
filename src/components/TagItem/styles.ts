import styled from "styled-components";

interface ContainerProps {
  color: string;
}

export const Container = styled.button<ContainerProps>`
  background: ${(props) => (props.color === "null" ? "#000" : props.color)};
  color: ${(props) => (props.color === "yellow" ? "#000" : "#fff")};
  height: 3rem;
  width: 100%;
  border-radius: 0.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  border: 1px solid black;

  span {
    width: 90%;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
