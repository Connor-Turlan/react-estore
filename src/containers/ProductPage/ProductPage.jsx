import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/Products";
import { getProductByID } from "../../services/api";
import Loading from "../../components/Loading/Loading";
import styles from "./ProductPage.module.scss";

function ProductPage(props) {
	const { loading, setLoading } = useContext(ProductContext);
	const [product, setProduct] = useState({});

	const { productID } = useParams();

	useEffect(() => {
		setLoading(true);

		getProductByID(productID)
			.then((data) => setProduct(data))
			.finally((data) => {
				setLoading(false);
			});
	}, []);

	return (
		<>
			{loading && <Loading />}
			<p>item name {productID}</p>
			<p>quantity</p>
			<p>variants</p>
			<p>price</p>
			<p>image</p>
			<p>favourite item??</p>
			<h3>Product Info Raw</h3>
			{Object.entries(product || {}).map((entry) => (
				<p key={entry[0]}>{entry.join(": ")}</p>
			))}
		</>
	);
}

export default ProductPage;
