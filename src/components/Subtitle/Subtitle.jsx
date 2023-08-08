import style from "./Subtitle.module.scss";
import btnAdd from "/images/btnAdd.png";

export function Subtitle({ setFormVisibilidade, formVisibilidade }) {
  return (
    <div className={style.subtitle}>
      <h2>Minha Organização:</h2>
      <img
        src={btnAdd}
        alt="Botão de exibir ou ocultar formulário"
        onClick={() => setFormVisibilidade(!formVisibilidade)}
      />
    </div>
  );
}
