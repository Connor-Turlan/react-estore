import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { getProductByID } from "../../services/api";
import Loading from "../../components/Loading/Loading";
import styles from "./ProductPage.module.scss";

function ProductPage(props) {
	const { loading, setLoading } = useContext(ProductContext);
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

	useEffect(fetchProduct, []);

	const { name, image, colour, price, packQuantity, description } = product;

	return (
		<>
			{loading && <Loading />}
			<h2>{name}</h2>
			<p>favourite item??</p>
			<p>quantity: {packQuantity}</p>
			<p>variants: {colour}</p>
			<p>price: {price}</p>
			<img src={image} alt={name}></img>
			<p>{description}</p>
			{/* <h3>Product Info Raw</h3>
			{Object.entries(product || {}).map((entry) => (
				<p key={entry[0]}>{entry.join(": ")}</p>
			))} */}
		</>
	);
}

export default ProductPage;
