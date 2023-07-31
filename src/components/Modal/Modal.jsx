import { CgCloseO } from "react-icons/cg";
import style from "./Modal.module.scss";

export function Modal({ children, modalOpenOrClose, visibilidadeModal }) {
  return (
    <div
      className={style.modal}
      style={{ "--visibilidade": visibilidadeModal }}
    >
      <div className={style.modal__wrapper}>
        <CgCloseO
          className={style.modal__wrapper__btnClose}
          onClick={() => modalOpenOrClose()}
        />
        {children}
      </div>
    </div>
  );
}
