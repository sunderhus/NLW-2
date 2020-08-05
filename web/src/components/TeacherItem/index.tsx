import React from "react";
import { Container } from "./styles";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
export const TeacherItem: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/44003532?s=460&u=5fa8b7c6a93cb9d08b870954c2ec8ed77131ab5b&v=4"
          alt="Foto de perfil, homem, 20 anos, olhando para o alto. Veste casaco e cachecol. No fundo uma banca de revistas e árvores."
        />
        <div>
          <strong>Matheus Sunderhus</strong>
          <span>Desenvolvimento WEB e Mobile</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias e padrões de projeto.
        <br />
        <br />
        Apaixonado por soluções web e mobile. Busco ensinar não apenas o que uma
        ferramente pode te ajudar, mas também o que pode ser alcançado com o
        domínio de padrões e arquiteturas de software. Assim como você, sempre
        em constante evolução.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>

        <button type="button">
          <img src={whatsAppIcon} alt="ícone de telefone" />
          <span>Enviar Contato</span>
        </button>
      </footer>
    </Container>
  );
};
