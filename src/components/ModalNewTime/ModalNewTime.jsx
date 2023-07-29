import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { v4 as uuid } from "uuid";
import style from "./ModalNewTime.module.scss";
import { TextField, Button } from "../";

export function ModalNewTime({ modalOpen, visibilidadeModal, onSumitNewTime }) {
  const [time, setTime] = useState({
    name: "",
    color: "#000000"
  });

  const onSubmitTime = (e) => {
    e.preventDefault();
    onSumitNewTime(time);
    modalOpen();
  };

  return (
    <div
      className={style.modal}
      style={{ "--visibilidade": visibilidadeModal }}
    >
      <form onSubmit={onSubmitTime}>
        <CgCloseO className={style.btnClose} onClick={() => modalOpen()} />
        <h2>Preencha os dados para criar o novo time.</h2>
        <TextField
          label="Nome do time"
          name="name"
          value={time.name}
          required={true}
          type="text"
          placeholder="Digite o nome do time"
          onChange={(e) => setTime({ ...time, name: e })}
        />
        <TextField
          label="Selecione a cor do time"
          name="color"
          value={time.color}
          required={true}
          type="color"
          placeholder="Digite o nome do time"
          onChange={(e) => setTime({ ...time, color: e })}
        />
        <Button>
          <p>Criar Time</p>
        </Button>
      </form>
    </div>
  );
}
