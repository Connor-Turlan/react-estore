import { useEffect, useRef } from "react";
import styles from "./FilterBar.module.scss";

function FilterBar({ setFilter }) {
	const firstMount = useRef(true);

	let sortFunctions = {
		name: (a, b) => (a && b ? a.name.localeCompare(b.name) : a),
		price: (a, b) => {
			return a.price.localeCompare(b.price);
		},
		"pack quantity": (a, b) => {
			return a.packQuantity.localeCompare(b.packQuantity);
		},
	};

	/* useEffect(() => {
		setFilter((a, b) => a.name.localeCompare(b.name));
	}); */

	const setFunction = (func) => {
		setFilter(func);
		if (firstMount.current) {
			firstMount.current = false;
		} else {
			setFilter(func);
		}
	};

	console.log(setFilter);

	return (
		<div className={styles.FilterBar}>
			<h3>Sort By:</h3>
			<button /* onClick={setFunction(sortFunctions["name"]) }*/>
				Name
			</button>
			<button /* onClick={setFunction(sortFunctions["price"])}  */>
				Price
			</button>
			<button /* onClick={setFunction((a, b) => a.name.localeCompare(b.name))} */
			>
				Pack Quantity
			</button>
		</div>
	);
}

export default FilterBar;
