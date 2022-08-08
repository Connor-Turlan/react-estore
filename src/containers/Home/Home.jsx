import styles from "./Home.module.scss";
import StoreGrid from "../StoreGrid/StoreGrid";
import Loading from "../../components/Loading/Loading";
import Carousel from "../Carousel/Carousel";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";

function Home(props) {
	const { products, setProducts, isLoading, setLoading } =
		useContext(ProductContext);

	return (
		<>
			{isLoading && <Loading />}
			<h1>🔥Store</h1>

			<Carousel products={products.slice(0, 5)} />
			<StoreGrid items={products.slice(0, 18)} />
			<NavLink to="/products">Show all Products</NavLink>
		</>
	);
}

export default Home;
