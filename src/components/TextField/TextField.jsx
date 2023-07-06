import style from "./TextField.module.scss";

export function TextField(props) {
	return (
		<div className={style.campo_texto}>
			<label>{props.label}</label>
			<input type={props.type} placeholder={props.placeholder} />
		</div>
	);
}
