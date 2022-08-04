import styles from "./App.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getItemData, getItems, getProducts } from "./services/api";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import { ProductContext } from "./contexts/Products";

function App() {
	return (
		<BrowserRouter>
			<ProductContext>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</ProductContext>
		</BrowserRouter>
	);
}

export default App;
