import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreGrid from "./containers/StoreGrid/StoreGrid";
import Carousel from "./containers/Carousel/Carousel";
import { getItemData } from "./api";
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
	const [isLoading, setLoading] = useState(false);
	const [items, setItems] = useState(shopItems);

	const handleClick = (event) => {
		setLoading(true);
		getItemData()
			.then((data) => console.log(data))
			.finally(setLoading(false));
	};

	return (
		<div className="App">
			{isLoading && <Loading />}
			<Carousel items={items} />
			<StoreGrid items={items} />
			<button onClick={handleClick}>click</button>
		</div>
	);
}

export default App;
