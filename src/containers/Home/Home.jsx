import styles from "./Home.module.scss";
import StoreGrid from "../StoreGrid/StoreGrid";
import Loading from "../../components/Loading/Loading";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

function Home(props) {
	const { products, isLoading } = useContext(ProductContext);

	// scroll to top on mount.
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{isLoading && <Loading />}
			<h1>🔥 Store</h1>

			<ProductCarousel products={products.slice(0, 5)} />
			<StoreGrid items={products.slice(0, 18)} />
			<NavLink className={styles.ShowAll} to="/products">
				Show all Products
			</NavLink>
		</>
	);
}

export default Home;
