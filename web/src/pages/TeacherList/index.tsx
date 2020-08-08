import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { TeacherItem } from "../../components/TeacherItem";

import { Container, Form, Content, NotFound } from "./styles";
import Input from "../../components/Input";
import Select from "../../components/Select";

const TeacherForm: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: "IT", label: "Programação Web" },
              { value: "Matematica", label: "Matemática" },
              { value: "Física", label: "Física" },
              { value: "Quimica", label: "Química" },
              { value: "Historia", label: "História" },
              { value: "Biologia", label: "Biologia" },
            ]}
          />
          <Select
            label="Dia da semana"
            name="week_day"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input label="Hora" name="time" type="time" />
        </Form>
      </PageHeader>

      <Content>
        {teachers ? (
          <>
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
