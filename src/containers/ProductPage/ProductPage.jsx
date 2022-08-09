import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { getProductByID } from "../../services/api";
import Loading from "../../components/Loading/Loading";
import styles from "./ProductPage.module.scss";
import { ShoppingCart } from "../../contexts/ShoppingCartContext";

const getRequestedQuantity = () => {
	const qty = document.getElementById();
	return qty;
};

function ProductPage(props) {
	const { loading, setLoading } = useContext(ProductContext);
	const { cartItems, setCart } = useContext(ShoppingCart);
	const [product, setProduct] = useState({});

	const { productID } = useParams();

	const fetchProduct = () => {
		setLoading(true);

		getProductByID(productID)
			.then(setProduct)
			.finally((data) => {
				setLoading(false);
			});
	};

	const addProductToCart = () => {
		const currQuantity = cartItems[productID] || 0;
		setProduct({ ...product, [productID]: currQuantity });
	};

	useEffect(fetchProduct, []);

	const { name, image, colour, price, packQuantity, description } = product;

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
					<button onClick={addProductToCart}>Add to Cart</button>
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
