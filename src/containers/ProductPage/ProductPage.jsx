import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { getProductByID, updateProductFavourite } from "../../services/api";
import Loading from "../../components/Loading/Loading";
import { ProductContext } from "../../contexts/ProductContext";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import styles from "./ProductPage.module.scss";
import VariantBar from "../../components/VariantBar/VariantBar";

function ProductPage(props) {
	const { products, loading, setLoading, updateStock, fetchProducts } =
		useContext(ProductContext);
	const { cartItems, setCart } = useContext(ShoppingCartContext);

	const { productID } = useParams();
	const navigate = useNavigate();

	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);

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

	const updateCart = async (event) => {
		event.preventDefault();

		const { stock } = product;

		// get the requested quantity from the user.
		const requested = parseInt(quantity);
		const totalQty = (cartItems[productID] || 0) + requested;

		// validate that the stock is availiable.
		if (stock < requested) {
			alert("Not enough items in stock.");
			return;
		}

		// update the cart and server stock counts.
		setCart({ ...cartItems, [productID]: totalQty });
		await updateStock(productID, stock - requested);

		setQuantity(1);

		// send user to cart.
		navigate("/cart");
	};

	const updateFavourite = async () => {
		const { favourite } = product;
		await updateProductFavourite(productID, !favourite);
		await fetchProducts();
		setProduct({ ...product, favourite: !favourite });
	};

	useEffect(fetchProduct, [cartItems, productID, setLoading]);

	// scroll to top on mount.
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const {
		name,
		image,
		colour,
		price,
		packQuantity,
		description,
		stock,
		variants,
		favourite,
	} = product;

	const styleFav = favourite
		? [styles.Product__fav, styles.Product__fav_selected].join(" ")
		: styles.Product__fav;

	return (
		<>
			{loading && <Loading />}
			<div className={styles.Container}>
				<div className={styles.Product}>
					<header className={styles.Product__Title}>
						<h2>{name}</h2>
						<button
							className={styleFav}
							onClick={updateFavourite}
							title="Favouite Item?"
						>
							<i className="fa">&#xf005;</i>
						</button>
					</header>

					<div className={styles.Product__Body}>
						<img
							className={styles.Product__Image}
							src={image}
							alt={name}
						></img>

						<main className={styles.Product__Details}>
							<p>Price: ${price}</p>
							<p>Pack Size: {packQuantity}</p>
							<p>Avaliable in: {colour}</p>
							<VariantBar
								productID={productID}
								variants={variants}
							/>

							<p>In stock: {stock}</p>
							{productID in cartItems && (
								<p>In cart: {cartItems[productID]}</p>
							)}

							<form onSubmit={updateCart}>
								<input
									type="number"
									value={quantity}
									onChange={updateQuantity}
								/>
								<input type="submit" value="Add to Cart" />
							</form>
						</main>
					</div>

					<p className={styles.Product__Description}>{description}</p>
				</div>
			</div>
		</>
	);
}

export default ProductPage;
