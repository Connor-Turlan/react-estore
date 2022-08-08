import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/Products";
import styles from "./ProductPage.module.scss";

function ProductPage(props) {
	const { products } = useContext(ProductContext);
	const { productID } = useParams();

	return (
		<>
			<p>item name {productID}</p>
			<p>quantity</p>
			<p>variants</p>
			<p>price</p>
			<p>image</p>
			<p>favourite item??</p>
		</>
	);
}

export default ProductPage;
