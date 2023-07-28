import style from "./Time.module.scss";
import { Card } from "../";
import { v4 as uuid } from "uuid";

export function Time(props) {
  return (
    props.colabs.length > 0 && (
      <section
        className={style.time}
        style={{ backgroundColor: `${props.color}12` }}
      >
        <input
          className={style.time__color}
          type="color"
          value={props.color}
          onChange={(e) => props.onChangeColor(e.target.value, props.name)}
        />
        <h3 style={{ "--bg-time-color": props.color }}>{props.name}</h3>
        <div className={style.time__cardWrapper}>
          {props.colabs.map((colab) => (
            <Card
              key={uuid()}
              name={colab.nome}
              image={colab.imagem}
              cargo={colab.cargo}
              bgStyle={props.color}
              onDelete={props.onDelete}
            />
          ))}
        </div>
      </section>
    )
  );
}
