import "./App.css";
import { useState } from "react";
import StoreGrid from "./containers/StoreGrid/StoreGrid";
import Carousel from "./containers/Carousel/Carousel";

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
	const [items, setItems] = useState(shopItems);
	return (
		<div className="App">
			<Carousel items={items} />
			<StoreGrid items={items} />
		</div>
	);
}

export default App;
