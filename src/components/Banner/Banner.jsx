import style from "./Banner.module.scss";

export function Banner() {
	return (
		<header className={style.banner}>
			<img
				src="/images/banner.png"
				alt="O banner principal da página do Organo"
			/>
		</header>
	);
}
