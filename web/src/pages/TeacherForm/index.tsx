import React, { useState, useCallback, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/Textarea";

import { Container, Main, ScheduleItem } from "./styles";

import warningIcon from "../../assets/images/icons/warning.svg";
import api from "../../services/api";

interface IScheduleItem {}

const TeacherList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const [subject, setSubject] = useState<string>("");
  const [cost, setCost] = useState<number>(0);

  const history = useHistory();

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: "0", from: "", to: "" },
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([...scheduleItems, { week_day: "0", from: "", to: "" }]);
  }, [scheduleItems]);

  const handleCreateClass = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      api
        .post("classes", {
          name,
          avatar,
          whatsapp,
          bio,
          subject,
          cost: cost,
          schedule: scheduleItems,
        })
        .then(() => {
          alert("cadastro realizado com sucesso.");

          history.push("/");
        })
        .catch(() => {
          alert("Erro no cadastro!");
        });
    },
    [name, avatar, whatsapp, bio, subject, cost, scheduleItems, history]
  );

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return {
            ...scheduleItem,
            [field]: value,
          };
        }
        return scheduleItem;
      });

      setScheduleItems(updatedScheduleItems);
    },
    [scheduleItems]
  );

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              label="Nome Completo"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <TextArea
              label="Biografia"
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
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
            <Input
              label="Custo da sua hora por aula"
              name="cost"
              type="number"
              min={0}
              value={cost}
              onChange={(e) => {
                setCost(Number(e.target.value));
              }}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <ScheduleItem key={`${scheduleItem.week_day}-${index}`}>
                  <Select
                    label="Dia da semana"
                    name="week_day"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
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
                    label="Das"
                    name="from"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    label="Até"
                    name="to"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
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
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </Main>
    </Container>
  );
};

export default TeacherList;
