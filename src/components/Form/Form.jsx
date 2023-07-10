import style from "./Form.module.scss";
import { TextField, Button, DropList } from "../";

export function Form() {
	const times = [
		"Programação",
		"Front-end",
		"Data Science",
		"Intelegência Artificial",
		"DevOps",
		"UX e Design",
		"Mobile",
		"Inovação e Gestão",
	];

	return (
		<section className={style.form_container}>
			<form onSubmit={onSave}>
				<h2>Preencha os dados para criar o card do colaborador.</h2>
				<TextField
					required={true}
					type="text"
					label="Nome"
					placeholder="Digite seu nome"
				/>
				<TextField
					required={true}
					type="text"
					label="Cargo"
					placeholder="Digite seu cargo"
				/>
				<TextField
					required={false}
					type="text"
					label="Imagem"
					placeholder="Informe o endereço da imagem"
				/>
				<DropList required={true} label="Time" time={times} />
				<Button>
					<p>Criar card</p>
				</Button>
			</form>
		</section>
	);
}

const onSave = (e) => {
	e.preventDefault();
};
