import { BsPlusCircle } from "react-icons/bs";
import style from "./DropList.module.scss";

export function DropList(props) {
  return (
    <div className={style.dropList}>
      <label htmlFor={props.name}>{props.label}</label>
      <select
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        id={props.name}
        name={props.name}
        required={props.required}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </select>
      <BsPlusCircle
        className={style.dropList__btnAdd}
        title="Adicionar novo time"
        onClick={() => props.modalOpen()}
      />
    </div>
  );
}
