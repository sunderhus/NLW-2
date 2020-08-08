import styled from "styled-components";

export const SelectBlock = styled.div`
  position: relative;

  label {
    font-size: 1.4rem;
  }

  select {
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
