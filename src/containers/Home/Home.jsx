import styles from "./Home.module.scss";
import StoreGrid from "../StoreGrid/StoreGrid";
import Carousel from "../Carousel/Carousel";
import Loading from "../../components/Loading/Loading";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/Products";
import { getProducts } from "../../services/api";

function Home(props) {
	const { products, setProducts, isLoading, setLoading } =
		useContext(ProductContext);

	const fetchProducts = (event) => {
		setLoading(true);

		getProducts()
			.then((data) => setProducts(data))
			.finally(setLoading(false));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<h1>🔥Store</h1>
			<button onClick={fetchProducts}>getItems</button>
			{isLoading && <Loading />}
			<Carousel items={products.slice(0, 4)} />
			<StoreGrid items={products} />
		</>
	);
}

export default Home;
