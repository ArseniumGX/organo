import style from "./Card.module.scss";
import { CgCloseO } from "react-icons/cg";

export function Card({ id, image, name, cargo, bgStyle, onDelete }) {
  return (
    <div className={style.card}>
      <CgCloseO
        className={style.card__btndel}
        style={{ "--bg-card-color": bgStyle }}
        onClick={() => onDelete(id)}
      />
      <div
        className={style.card__header}
        style={{ "--bg-card-color": bgStyle }}
      >
        <img src={image} alt={name} />
      </div>
      <div className={style.card__footer}>
        <h4>{name}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}
