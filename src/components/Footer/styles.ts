import styled from "styled-components";

export const Container = styled.footer`
  background: var(--black);
  color: #fff;
  width: 100%;
  height: 100%;

  padding: 35px 2rem;

  @media (min-width: 720px) {
    padding: 35px 12rem;
  }

  ul {
    list-style-type: none;
    min-width: 20rem;

    a {
      text-decoration: none;
      font-size: 1rem;
      position: relative;
      color: #fff;

      &:after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        bottom: -5px;
      }

      &:hover:after {
        width: 100%;
        transition: width 0.7s ease-in-out;
      }
    }

    li {
      margin-top: 1rem;
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
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
