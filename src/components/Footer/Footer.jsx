import style from "./Footer.module.scss";
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__main}>
        <div className={style.footer__main__socials}>
          <a href="https://www.facebook.com/arseniumgx" target="_blank">
            <BsFacebook />
          </a>
          <a href="https://twitter.com/ArseniumGX" target="_blank">
            <BsTwitter />
          </a>
          <a href="https://linkedin.com/in/arseniumgx" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/arseniumgx" target="_blank">
            <BsGithub />
          </a>
        </div>
        <div className={style.footer__main__logo}>
          <img src="/images/logo.png" alt="Logo organo" />
        </div>
        <div className={style.footer__main__mark}>
          <p>
            Desenvolvido por José "<code>ArseniumGX</code>" Macedo
          </p>
        </div>
      </div>
      <div className={style.footer__alura}>
        <p>
          Powered by{" "}
          <a
            href="https://www.alura.com.br/"
            target="_blank"
            title="Alura | Cursos online de Tecnologia"
          >
            Alura
          </a>
        </p>
      </div>
    </footer>
  );
}
