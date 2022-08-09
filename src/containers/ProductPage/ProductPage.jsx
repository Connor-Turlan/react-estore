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
			.finally(() => {
				setLoading(false);
			});
	};

	const updateQuantity = (e) => {
		if (e.target.value > 0 || e.target.value === "")
			setQuantity(e.target.value);
	};

	const updateCart = async () => {
		let { stock } = product;

		// get the requested quantity from the user.
		const requested = parseInt(quantity);
		const totalQty = (cartItems[productID] || 0) + requested;

		// validate that the stock is availiable.
		if (stock < totalQty) {
			alert("not enough stock.");
			return;
		}

		// update the cart and server stock counts.
		setCart({ ...cartItems, [productID]: totalQty });
		updateStock(productID, stock - requested);

		// send user to cart.
		navigate("/cart");
	};

	useEffect(fetchProduct, []);

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
		</div>
	);
}

export default ProductPage;
