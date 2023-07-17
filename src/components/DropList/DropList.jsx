import style from "./DropList.module.scss";

export function DropList(props) {
  return (
    <div className={style.drop_list}>
      <label htmlFor={props.name}>{props.label}</label>
      <select
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        id={props.name}
        name={props.name}
        required={props.required}
      >
        {props.itens.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}
