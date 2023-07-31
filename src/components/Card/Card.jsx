import style from "./Card.module.scss";
import { CgCloseO } from "react-icons/cg";
import { VscHeartFilled, VscHeart } from "react-icons/vsc";

export function Card({
  id,
  image,
  name,
  cargo,
  bgStyle,
  onDelete,
  favorite,
  favoriteAction
}) {
  const favAction = () => favoriteAction(id);

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
        {favorite ? (
          <VscHeartFilled
            className={style.card__footer__fav}
            style={{ "--fav-color": "#f00" }}
            onClick={favAction}
          />
        ) : (
          <VscHeart
            className={style.card__footer__fav}
            style={{ "--fav-color": "#333" }}
            onClick={favAction}
          />
        )}
      </div>
    </div>
  );
}
