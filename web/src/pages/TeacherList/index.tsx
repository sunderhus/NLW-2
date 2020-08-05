import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { TeacherItem } from "../../components/TeacherItem";

import { Container, InputBlock, Form, Content, NotFound } from "./styles";

const TeacherForm: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <InputBlock>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </InputBlock>
        </Form>
      </PageHeader>

      <Content>
        {teachers ? (
          <>
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
          </>
        ) : (
          <NotFound>
            <p>Nenhum professor encontrado com sua pesquisa.</p>
          </NotFound>
        )}
      </Content>
    </Container>
  );
};

export default TeacherForm;
