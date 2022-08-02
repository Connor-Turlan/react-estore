import styles from "./StoreItem.module.scss";

function StoreItem(props) {
	return (
		<div className={styles.StoreItem}>
			<h1>{props.item.name}</h1>
		</div>
	);
}

export default StoreItem;
