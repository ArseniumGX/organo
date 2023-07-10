import style from "./TextField.module.scss";

export function TextField(props) {
	return (
		<div className={style.campo_texto}>
			<label htmlFor={props.label}>{props.label}</label>
			<input
				id={props.label}
				name={props.label}
				required={props.required}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
}
