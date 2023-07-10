import style from "./DropList.module.scss";

export function DropList(props) {
	return (
		<div className={style.drop_list}>
			<label htmlFor={props.label}>{props.label}</label>
			<select required={props.required}>
				{props.time.map((item) => (
					<option key={item}>{item}</option>
				))}
			</select>
		</div>
	);
}
