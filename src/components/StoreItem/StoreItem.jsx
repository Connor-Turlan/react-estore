import styles from "./StoreItem.module.scss";

function StoreItem(props) {
	const { name, price, image } = props.item;

	return (
		<div className={styles.StoreItem}>
			<h1>{name.match(/\w+/i)}</h1>
			<img className={styles.StoreItem__img} src={image} />
			<p>{`$${price}`}</p>
		</div>
	);
}

export default StoreItem;
