import styles from "./Home.module.scss";
import StoreGrid from "../StoreGrid/StoreGrid";
import Loading from "../../components/Loading/Loading";
import Carousel from "../Carousel/Carousel";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/Products";

function Home(props) {
	const { products, setProducts, isLoading, setLoading } =
		useContext(ProductContext);

	return (
		<>
			<h1>🔥Store</h1>
			{isLoading && <Loading />}

			<Carousel products={products} />
			<StoreGrid items={products} />
		</>
	);
}

export default Home;
