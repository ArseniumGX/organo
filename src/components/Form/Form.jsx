import style from "./Form.module.scss";
import { TextField, Button, DropList } from "../";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export function Form(props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const onSave = (e) => {
    e.preventDefault();
    props.onSubmit({ id: uuid(), nome, cargo, imagem, time });
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
        <TextField
          value={nome}
          onChange={(e) => setNome(e)}
          required={true}
          type="text"
          label="Nome"
          name="nome"
          placeholder="Digite seu nome"
        />
        <TextField
          value={cargo}
          onChange={(e) => setCargo(e)}
          required={true}
          type="text"
          label="Cargo"
          name="cargo"
          placeholder="Digite seu cargo"
        />
        <TextField
          value={imagem}
          onChange={(e) => setImagem(e)}
          required={false}
          type="text"
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
          itens={props.times}
          modalVisibilidade={props.modalVisibilidade}
          modalOpen={props.modalOpen}
        />
        <Button>
          <p>Criar card</p>
        </Button>
      </form>
    </section>
  );
}
