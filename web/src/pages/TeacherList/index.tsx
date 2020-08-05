import React from "react";
import { Container, InputBlock, Form } from "./styles";
import PageHeader from "../../components/PageHeader";

const TeacherForm: React.FC = () => {
  return (
    <Container className="container">
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
    </Container>
  );
};

export default TeacherForm;
