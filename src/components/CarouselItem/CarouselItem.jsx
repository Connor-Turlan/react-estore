import styles from "./CarouselItem.module.scss";

function CarouselItem(props) {
	return (
		<div className={styles.CarouselItem}>
			<h1>{props.item.name}</h1>
		</div>
	);
}

export default CarouselItem;
