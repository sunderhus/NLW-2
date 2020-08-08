import React, { useState, useCallback } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/Textarea";

import { Container, Main, ScheduleItem } from "./styles";

import warningIcon from "../../assets/images/icons/warning.svg";

interface IScheduleItem {}

const TeacherList: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }, [scheduleItems]);

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <Main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input label="Nome Completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="Whatsapp" name="whatsapp" />
          <TextArea label="Biografia" name="bio" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => {
            return (
              <ScheduleItem key={scheduleItem.week_day}>
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
                <Input label="Das" name="from" type="time" />
                <Input label="Até" name="to" type="time" />
              </ScheduleItem>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            <span>
              Importante! <br /> Preencha todos os dados.
            </span>
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </Main>
    </Container>
  );
};

export default TeacherList;
