import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { getProductByID } from "../../services/api";
import Loading from "../../components/Loading/Loading";
import styles from "./ProductPage.module.scss";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

const getRequestedQuantity = () => {
	const qty = document.getElementById();
	return qty;
};

function ProductPage(props) {
	const { loading, setLoading, updateStock } = useContext(ProductContext);
	const { cartItems, setCart } = useContext(ShoppingCartContext);

	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);

	const { productID } = useParams();
	const navigate = useNavigate();

	const fetchProduct = () => {
		setLoading(true);

		getProductByID(productID)
			.then(setProduct)
			.finally((data) => {
				setLoading(false);
			});
	};

	const updateQuantity = (e) => {
		setQuantity(e.target.value);
	};

	const updateCart = async () => {
		console.log(productID, quantity);
		const { stock } = product;
		const currentQty = cartItems[productID] || 0;

		// validate the quantity.
		if (quantity <= 0) {
			alert("stock quantity must be greater than 0.");
			return;
		}

		// validate the stock levels.
		if (stock < currentQty) {
			alert("not enough items in stock.");
			return;
		}

		// update the product's stock count.
		await updateStock(productID, stock - currentQty);
		console.log(stock, currentQty, stock - currentQty);

		// update the cart.
		setCart({ ...cartItems, [productID]: currentQty + parseInt(quantity) });
		setQuantity(1);

		// send user to cart.
		navigate("/cart");
	};

	useEffect(fetchProduct, [cartItems]);

	const { name, image, colour, price, packQuantity, description, stock } =
		product;

	return (
		<div className={styles.Product}>
			{loading && <Loading />}
			<header className={styles.Product__Title}>
				<h2>{name}</h2>
				<p>FAV</p>
			</header>
			<div className={styles.Product__Body}>
				<img
					className={styles.Product__Image}
					src={image}
					alt={name}
				></img>
				<main className={styles.Product__Details}>
					<p>Price: {price}</p>
					<p>Pack Size: {packQuantity}</p>
					<p>Avaliable in: {colour}</p>
					<p>In stock: {stock}</p>
					<input
						type="number"
						value={quantity}
						onChange={updateQuantity}
					/>
					<button onClick={updateCart}>Add to Cart</button>
				</main>
			</div>
			<p className={styles.Product__Description}>{description}</p>

			{/* <h3>Product Info Raw</h3>
			{Object.entries(product || {}).map((entry) => (
				<p key={entry[0]}>{entry.join(": ")}</p>
			))} */}
		</div>
	);
}

export default ProductPage;
