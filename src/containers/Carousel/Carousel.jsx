import styles from "./Carousel.module.scss";
import CarouselItem from "../../components/CarouselItem/CarouselItem";

function Carousel(props) {
	const { products } = props;

	return (
		<div className={styles.Carousel}>
			{products.map((product) => (
				<CarouselItem key={product.id} item={product} />
			))}
		</div>
	);
}

export default Carousel;
