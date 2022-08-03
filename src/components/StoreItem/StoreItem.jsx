import styles from "./StoreItem.module.scss";

function StoreItem(props) {
	const { name, price, stock } = props.item;

	return (
		<div className={styles.StoreItem}>
			<h1>{name}</h1>
			<p>{`$${price}`}</p>
			<p>{`x${stock}`}</p>
		</div>
	);
}

export default StoreItem;
