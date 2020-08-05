import styled from "styled-components";

export const WrapperPage = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background-color: var(--color-primary);
`;

export const Content = styled.div`
  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total";
  }
`;

export const ContainerLogo = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;
    max-width: 443px;
  }
`;

export const Logo = styled.img`
  height: 10rem;
  @media (min-width: 1100px) {
    height: 100%;
  }
`;

export const Subtitulo = styled.h2`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;
  @media (min-width: 1100px) {
    text-align: initial;
    font-size: 3.6rem;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  @media (min-width: 1100px) {
    justify-self: end;
    grid-area: hero;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;

export const StudyOption = styled.a`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-button-text);

  transition: background-color 0.2s;

  &:first-child {
    margin-right: 1.6rem;
    background: var(--color-primary-lighter);

    &:hover {
      background: var(--color-primary-light);
    }
  }
  &:nth-child(2) {
    background: var(--color-secundary);

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  @media (min-width: 1100px) {
    font-size: 2.4rem;
  }
`;

export const OptionIcon = styled.img`
  width: 4rem;
  margin-right: 2.4rem;
`;

export const ConnectionsCounter = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: total;
  width: 300px;
  @media (min-width: 1100px) {
    justify-self: end;
  }
`;

export const ConnectionsIcon = styled.img`
  margin-left: 0.8rem;
`;
