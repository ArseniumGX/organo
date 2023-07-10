import style from "./Button.module.scss";

export function Button(props) {
	return (
		<div className={style.button}>
			<button>{props.children}</button>
		</div>
	);
}
