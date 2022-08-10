import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Loading from "../../components/Loading/Loading";
import StoreGrid from "../StoreGrid/StoreGrid";
import FilterBar from "../../components/FilterBar/FilterBar";
/* import styles from "./Products.module.scss"; */

function Products(props) {
	/* const defaultSort = (a, b) => a.name.localeCompare(b.name); */

	const { isLoading, products } = useContext(ProductContext);
	/* const [sortingFunction, setSortingFunction] = useState(defaultSort); */

	// scroll to top on mount.
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<>
			<h1>All Products</h1>
			{isLoading && <Loading />}
			{/* <FilterBar setFilter={setSortingFunction} /> */}
			<StoreGrid items={products} />
		</>
	);
}

export default Products;
