import React, { useState, useEffect } from "react";

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

import api from "../../services/api";

interface IConnections {
  total: number;
}

const Landing: React.FC = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function loadConnections() {
      new Promise(async () => {
        const { data } = await api.get<IConnections>("connections");

        setTotal(data.total);
      });
    }

    loadConnections();
  }, []);

  return (
    <WrapperPage>
      <Content>
        <ContainerLogo>
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
          Total de {total} conexões já realizadas
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
