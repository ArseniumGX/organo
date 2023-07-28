import style from "./Time.module.scss";
import { Card } from "../";
import { v4 as uuid } from "uuid";

export function Time({
  timeName,
  color,
  colaboradores,
  onDelete,
  onChangeColor
}) {
  return (
    colaboradores.length > 0 && (
      <section className={style.time} style={{ backgroundColor: `${color}19` }}>
        <input
          className={style.time__color}
          type="color"
          value={color}
          onChange={(e) => onChangeColor(e.target.value, timeName)}
        />
        <h3 style={{ "--bg-time-color": color }}>{timeName}</h3>
        <div className={style.time__cardWrapper}>
          {colaboradores.map((colaborador) => (
            <Card
              key={uuid()}
              name={colaborador.nome}
              image={colaborador.imagem}
              cargo={colaborador.cargo}
              bgStyle={color}
              onDelete={onDelete}
            />
          ))}
        </div>
      </section>
    )
  );
}
