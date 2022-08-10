import Carousel from "../../components/Carousel/Carousel";
import CarouselItem from "./CarouselItem/CarouselItem";
import styles from "./ProductCarousel.module.scss";

function ProductCarousel({ products }) {
	return (
		<Carousel style={styles.ProductCarousel}>
			{products.map((product) => (
				<CarouselItem key={product.id} item={product} />
			))}
		</Carousel>
	);
}

export default ProductCarousel;
