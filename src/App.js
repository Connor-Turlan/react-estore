import styles from "./App.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getItemData, getItems, getProducts } from "./services/api";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import ProductPage from "./containers/ProductPage/ProductPage";
import { ProductProvider } from "./contexts/ProductContext";
import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";
import ShoppingCartProvider from "./contexts/ShoppingCartContext";

function App() {
	return (
		<main className={styles.App}>
			<BrowserRouter>
				<ProductProvider>
					<ShoppingCartProvider>
						<Nav />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/products" element={<Products />} />
							<Route
								path="/products/:productID"
								element={<ProductPage />}
							/>
							<Route path="/cart" element={<ShoppingCart />} />
						</Routes>
					</ShoppingCartProvider>
				</ProductProvider>
			</BrowserRouter>
		</main>
	);
}

export default App;
