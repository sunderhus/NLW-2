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

  label {
    color: var(--color-text-in-primary);
  }
  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    transition: backgorund-color 0.2s;
    margin-top: 3.2rem;

    &:hover {
      background: var(--color-secundary-dark);
    }
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Content = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 74rem;
    margin: 0 auto;
  }
`;
export const NotFound = styled.div`
  display: flex;
  width: 100%;
  height: 40rem;
  justify-content: center;
  align-items: center;
  p {
    color: var(--color-text-complement);
    max-width: 24.7rem;
    text-align: center;
  }
`;
