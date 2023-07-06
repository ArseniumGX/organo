import style from "./Form.module.scss";
import { TextField } from "../";

export function Form() {
	return (
		<session className={style.form_container}>
			<form>
				<h2>Preencha os dados para criar o card do colaborador.</h2>
				<TextField type="text" label="Nome" placeholder="Digite seu nome" />
				<TextField type="text" label="Cargo" placeholder="Digite seu cargo" />
				<TextField
					type="text"
					label="Imagem"
					placeholder="Informe o endereço da imagem"
				/>
				<button onClick={addCard}>Criar card</button>
			</form>
		</session>
	);
}

const addCard = (e) => {
	e.preventDefault();
};
