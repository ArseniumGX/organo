import style from "./Time.module.scss";
import { Card } from "../";
import { v4 as uuid } from "uuid";

export function Time({
  time,
  colaboradores,
  onDelete,
  onChangeColor,
  favoriteAction
}) {
  return (
    colaboradores.length > 0 && (
      <section
        className={style.time}
        style={{ backgroundColor: `${time.color}19` }}
      >
        <input
          className={style.time__color}
          type="color"
          value={time.color}
          onChange={(e) => onChangeColor(e.target.value, time.id)}
        />
        <h3 style={{ "--bg-time-color": time.color }}>{time.name}</h3>
        <div className={style.time__cardWrapper}>
          {colaboradores.map((colaborador) => (
            <Card
              key={uuid()}
              id={colaborador.id}
              name={colaborador.nome}
              image={colaborador.imagem}
              cargo={colaborador.cargo}
              favorite={colaborador.favorite}
              favoriteAction={favoriteAction}
              bgStyle={time.color}
              onDelete={onDelete}
            />
          ))}
        </div>
      </section>
    )
  );
}
