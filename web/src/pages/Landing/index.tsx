import React from "react";

import {
  WrapperPage,
  Content,
  ContainerLogo,
  Logo,
  Subtitulo,
  HeroImage,
  ButtonContainer,
  StudyOption,
  OptionIcon,
  ConnectionsCounter,
  ConnectionsIcon,
} from "./styles";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

const Landing: React.FC = () => {
  return (
    <WrapperPage>
      <Content>
        <ContainerLogo className="container">
          <Logo src={logoImg} alt="Proffy Logo" />
          <Subtitulo>Sua Plataforma de estudos online.</Subtitulo>
        </ContainerLogo>

        <HeroImage
          src={landingImg}
          alt="Plataforma de estudos Proffy. Três pessoas, segurando dispositivos móveis, a pessoa do centro encontra-se em um mural."
        />

        <ButtonContainer>
          <StudyOption to="/study">
            <OptionIcon src={studyIcon} alt="Clique aqui para estudar." />
            Estudar
          </StudyOption>
          <StudyOption to="/give-classes">
            <OptionIcon
              src={giveClassesIcon}
              alt="Clique aqui para dar aula."
            />
            Dar Aula
          </StudyOption>
        </ButtonContainer>

        <ConnectionsCounter>
          Total de 200 conexões já realizadas
          <ConnectionsIcon
            src={purpleHeartIcon}
            alt="Ícone no formato de coração."
          />
        </ConnectionsCounter>
      </Content>
    </WrapperPage>
  );
};

export default Landing;
