import { NavLink } from "react-router-dom";
import styles from "./StoreItem.module.scss";

function StoreItem({ item }) {
	const { id, name, price, image, favourite } = item;

	return (
		<NavLink className={styles.StoreItem} to={`/products/${id}`}>
			<h1>
				{`${name}`}
				{favourite && <i className="fa">&#xf006;</i>}
			</h1>
			<img className={styles.StoreItem__img} src={image} />
			<p>{`$${price}`}</p>
		</NavLink>
	);
}

export default StoreItem;
