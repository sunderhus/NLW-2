import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  @media (min-width: 700px) {
    height: 340px;
  }
`;
export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;
export const Logo = styled.img`
  height: 1.6rem;
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 3.6rem Archivo;
    color: var(--color-title-in-primary);
  }
  p {
    font: 700 1.6rem Archivo;
    max-width: 30rem;
    line-height: 2.6rem;
    margin-top: 2.4rem;
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      width: 350px;
    }
  }
`;
