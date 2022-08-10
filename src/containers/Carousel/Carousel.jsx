import styles from "./Carousel.module.scss";
import CarouselItem from "./CarouselItem/CarouselItem";

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
