import style from "./Form.module.scss";
import { Field, Button, DropList } from "../";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export function Form({
  onSubmit,
  times,
  modalVisibilidade,
  modalOpenOrClose,
  acao
}) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const onSave = (e) => {
    e.preventDefault();
    onSubmit({ id: uuid(), nome, cargo, imagem, time, favorite: false });
    resetForm();
  };

  const resetForm = () => {
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className={style.form_container}>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Field
          value={nome}
          onChange={(e) => setNome(e)}
          required={true}
          label="Nome"
          name="nome"
          placeholder="Digite seu nome"
        />
        <Field
          value={cargo}
          onChange={(e) => setCargo(e)}
          required={true}
          label="Cargo"
          name="cargo"
          placeholder="Digite seu cargo"
        />
        <Field
          value={imagem}
          onChange={(e) => setImagem(e)}
          required={false}
          label="Imagem"
          name="imagem"
          placeholder="Informe o endereço da imagem"
        />
        <DropList
          value={time}
          onChange={(e) => setTime(e)}
          required={true}
          name="time"
          label="Time"
          itens={times}
          modalVisibilidade={modalVisibilidade}
          modalOpen={modalOpenOrClose}
          acao={acao}
        />
        <Button>
          <p>Criar card</p>
        </Button>
      </form>
    </section>
  );
}
