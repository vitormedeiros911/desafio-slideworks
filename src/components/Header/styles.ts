import styled from "styled-components";

export const Container = styled.header`
  background: var(--black);
  color: #fff;
  width: 100%;
  min-height: 13rem;
  display: flex;
  justify-content: center;

  svg {
    margin-top: 2rem;
    margin-right: 10px;
  }

  h1 {
    margin-top: 2rem;
    font-weight: 600;
    font-size: 3rem;
  }
`;
