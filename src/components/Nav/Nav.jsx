import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

function Nav(props) {
	return (
		<nav className={styles.Nav}>
			<NavLink className={styles.Nav__link} to="/">
				Home
			</NavLink>
			<NavLink className={styles.Nav__link} to="/products">
				Products
			</NavLink>
			<NavLink
				className={[styles.Nav__link, styles.Nav__right].join(" ")}
				to="/cart"
			>
				<i className="fa">&#xf07a;</i>
			</NavLink>
		</nav>
	);
}

export default Nav;
