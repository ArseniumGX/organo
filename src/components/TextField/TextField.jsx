import style from "./TextField.module.scss";

export function TextField(props) {
	return (
		<div className={style.campo_texto}>
			<label htmlFor={props.name}>{props.label}</label>
			<input
				value={props.value}
				onChange={(e) => props.onChange(e.target.value)}
				id={props.name}
				name={props.name}
				required={props.required}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
}
