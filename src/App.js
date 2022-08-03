import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreGrid from "./containers/StoreGrid/StoreGrid";
import Carousel from "./containers/Carousel/Carousel";
import { getItemData, getItems } from "./services/api";
import Loading from "./components/Loading/Loading";

const shopItems = [
	{ name: "hammer" },
	{ name: "hammer" },
	{ name: "hammer" },
	{ name: "hammer" },
	{ name: "hammer" },
	{ name: "hammer" },
	{ name: "hammer" },
	{ name: "hammer" },
	{ name: "hammer" },
	{ name: "hammer" },
];

function App() {
	//const [isLoading, setLoading] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		const wrapper = async () => {
			const newItems = await getItems();
			setItems(newItems);
		};

		wrapper();
	}, []);

	/* const handleClick = (event) => {
		setLoading(true);

		getItemData()
			.then((data) => setItems(data))
			.finally(setLoading(false));
	}; */

	return (
		<>
			<h1>🔥Store</h1>
			<StoreGrid items={items} />
		</>
	);

	/* return (
		<div className={styles.App}>
			{isLoading && <Loading />}
			<Carousel items={shopItems} />
			<StoreGrid items={items} />
			<button onClick={handleClick}>click</button>
		</div>
	); */
}

export default App;
