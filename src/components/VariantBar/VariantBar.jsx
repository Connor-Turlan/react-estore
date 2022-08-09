import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import styles from "./VariantBar.module.scss";

function VariantBar({ productID, variants }) {
	const { products } = useContext(ProductContext);

	const findProduct = (productID) =>
		products.find((item) => item.id === productID);

	const baseStyle = styles.variant;
	const selectedStyle = [styles.variant, styles.variant__selected].join(" ");

	return (
		<div className={styles.VariantBar}>
			{variants &&
				variants.map((item) => (
					<NavLink to={`/products/${findProduct(item).id}`}>
						<img
							className={
								item === productID ? selectedStyle : baseStyle
							}
							src={findProduct(item).image}
							alt={findProduct(item).name}
							title={findProduct(item).name}
						></img>
					</NavLink>
				))}
		</div>
	);
}

export default VariantBar;
