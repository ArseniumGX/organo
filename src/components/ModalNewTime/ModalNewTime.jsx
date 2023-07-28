import style from "./ModalNewTime.module.scss";
import { TextField, Button } from "../";
export function ModalNewTime({ modalOpen, visibilidadeModal }) {
  return (
    <div
      className={style.modal}
      style={{ "--visibilidade": visibilidadeModal }}
      onClick={() => modalOpen()}
    >
      <form>
        <h2>Preencha os dados para criar o novo time.</h2>
        <TextField required={true} />
        <TextField required={true} />
        <Button>
          <p>Criar Time</p>
        </Button>
      </form>
    </div>
  );
}
