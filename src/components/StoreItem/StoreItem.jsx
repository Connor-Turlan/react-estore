import { NavLink } from "react-router-dom";
import styles from "./StoreItem.module.scss";

function StoreItem(props) {
	const { id, name, price, image } = props.item;

	return (
		<NavLink className={styles.StoreItem} to={`/products/${id}`}>
			<h1>{name /* .match(/\w+/i) */}</h1>
			<img className={styles.StoreItem__img} src={image} />
			<p>{`$${price}`}</p>
		</NavLink>
	);
}

export default StoreItem;
