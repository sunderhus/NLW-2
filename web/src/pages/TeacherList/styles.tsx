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

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
