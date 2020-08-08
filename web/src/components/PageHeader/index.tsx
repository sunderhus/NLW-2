import React from "react";
import { Link } from "react-router-dom";

import { Header, TopBarContainer, Logo, HeaderContent } from "./styles";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

interface IPageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({
  title,
  children,
  description,
}) => {
  return (
    <Header>
      <TopBarContainer>
        <Link to="/">
          <Logo src={backIcon} alt="Voltar" />
        </Link>
        <Logo src={logoImg} alt="Logomarca escrito Proffy." />
      </TopBarContainer>

      <HeaderContent id="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
