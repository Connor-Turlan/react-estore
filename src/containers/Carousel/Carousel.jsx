import styles from "./Carousel.module.scss";
import CarouselItem from "../../components/CarouselItem/CarouselItem";

function Carousel(props) {
	return (
		<div className={styles.Carousel}>
			{props.items.map((item, index) => (
				<CarouselItem key={index} item={item} />
			))}
		</div>
	);
}

export default Carousel;
