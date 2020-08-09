import React, { useCallback } from "react";
import { Container } from "./styles";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface IProffy {
  id: number;
  subject: string;
  avatar: string;
  cost: string;
  name: string;
  whatsapp: string;
  user_id: number;
  bio: string;
}

interface ITeacherItemProps {
  teacher: IProffy;
}

export const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
  const handleCreateConnection = useCallback((user_id: number) => {
    api.post("connections", {
      user_id,
    });
  }, []);

  return (
    <Container>
      <header>
        <img
          src={teacher.avatar}
          alt="Foto de perfil, homem, 20 anos, olhando para o alto. Veste casaco e cachecol. No fundo uma banca de revistas e árvores."
        />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R${teacher.cost}</strong>
        </p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={() => handleCreateConnection(teacher.user_id)}
        >
          <img src={whatsAppIcon} alt="ícone de telefone" />
          <span>Enviar Contato</span>
        </a>
      </footer>
    </Container>
  );
};
