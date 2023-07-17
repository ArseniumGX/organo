import style from "./Time.module.scss";
import { Card } from "../Card/Card";

export function Time(props) {
  return (
    props.colabs.length > 0 && (
      <section
        className={style.time}
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ "--bg-time-color": props.primaryColor }}>{props.name}</h3>
        <div className={style.time__cards}>
          {props.colabs.map((colab) => (
            <Card
              key={colab.id}
              name={colab.name}
              image={colab.imagem}
              cargo={colab.cargo}
              bgStyle={props.primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
}
