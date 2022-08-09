import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { updateProductStock } from "../../services/api";
import styles from "./ShoppingCart.module.scss";

function ShoppingCart(props) {
	const { products, fetchProducts } = useContext(ProductContext);
	const { cartItems, setCart } = useContext(ShoppingCartContext);

	const findProductByID = (productID) =>
		products.find((product) => product.id === productID);

	const clearCart = async (e) => {
		// update the database.
		await fetchProducts();

		// restock items.
		Object.entries(cartItems).forEach(([productID, quantity]) => {
			const originalQty =
				quantity + (findProductByID(productID).stock || 0);
			updateProductStock(productID, originalQty);
		});

		// remove all items from the cart.
		setCart({});
	};

	return (
		<main className={styles.ShoppingCart}>
			doot doot <i className="fa fa-shopping-cart"></i>
			<ul className={styles.ShoppingList}>
				{Object.entries(cartItems).map(([productID, quantity]) => (
					<li key={productID}>{`${
						findProductByID(productID).name
					} x${quantity}`}</li>
				))}
			</ul>
			<button onClick={clearCart}>Empty Cart</button>
		</main>
	);
}

export default ShoppingCart;
