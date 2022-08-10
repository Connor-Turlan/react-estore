import styles from "./ShoppingCartItem.module.scss";

function ShoppingCartItem({ product, quantity }) {
	const { name, price } = product;
	const totalPrice = (parseFloat(price) * parseInt(quantity)).toFixed(2);

	return (
		<li className={styles.ShoppingCartItem}>
			<h3>{name}</h3>
			<p>x{quantity}</p>
			<p>${price}</p>
			<h4>${totalPrice}</h4>
		</li>
	);
}

export default ShoppingCartItem;
