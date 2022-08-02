import styles from "StoreItem.module.scss";

function StoreItem(props) {
	return <img src={props.item.imageLink} />;
}

export default StoreItem;
