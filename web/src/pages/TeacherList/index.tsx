import React, { useState, FormEvent, useCallback } from "react";
import PageHeader from "../../components/PageHeader";
import { TeacherItem, IProffy } from "../../components/TeacherItem";

import { Container, Form, Content, NotFound } from "./styles";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

const TeacherForm: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [proffys, setProffys] = useState([]);

  const searchProffys = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const response = await api.get("classes", {
        params: {
          subject,
          week_day: weekDay,
          time,
        },
      });
      setProffys(response.data);
    },
    [subject, time, weekDay]
  );

  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form onSubmit={searchProffys}>
          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Programação", label: "Programação" },
              { value: "Matemática", label: "Matemática" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
              { value: "História", label: "História" },
              { value: "Biologia", label: "Biologia" },
            ]}
          />
          <Select
            label="Dia da semana"
            name="week_day"
            value={weekDay}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
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
          <Input
            label="Hora"
            name="time"
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type="submit">Buscar</button>
        </Form>
      </PageHeader>

      <Content>
        {proffys.length > 0 ? (
          <>
            {proffys.map((proffy: IProffy) => {
              return <TeacherItem key={proffy.id} teacher={proffy} />;
            })}
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
