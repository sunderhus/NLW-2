import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;
export const Form = styled.form`
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const InputBlock = styled.div`
  position: relative;

  label {
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: none;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  &:focus-within {
    &:after {
      content: "";
      position: absolute;
      width: calc(100% - 3.2rem);
      height: 2px;
      background: var(--color-primary-light);
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }
  }

  + div {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    + div {
      margin: 0;
    }
  }
`;