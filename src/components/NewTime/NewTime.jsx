import style from "./NewTime.module.scss";
import { TextField, Button } from "../";
import { useState } from "react";

export function NewTime({ onSumitNewTime, modalOpenOrClose }) {
  const [time, setTime] = useState({
    name: "",
    color: "#000000"
  });

  const onSubmitTime = (e) => {
    e.preventDefault();
    onSumitNewTime(time);
    modalOpenOrClose();
  };

  return (
    <>
      <form className={style.newTime} onSubmit={onSubmitTime}>
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
    </>
  );
}
