import styles from "./Carousel.module.scss";

function Carousel({ style, children }) {
	return <div className={style || styles.Carousel}>{children}</div>;
}

export default Carousel;
