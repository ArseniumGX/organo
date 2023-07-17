import style from "./Card.module.scss";

export function Card({ image, name, cargo, bgStyle }) {
  return (
    <div className={style.card}>
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
