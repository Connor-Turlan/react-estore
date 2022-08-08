import { firestore } from "../firestore";

const DUMMY_formatData = (json) => {
	return json.map((entry) => {
		const { title, first, last } = entry.name;
		return { name: `${title} ${first} ${last}` };
	});
};

export const getItemData = async () => {
	const res = await fetch(
		"https://randomuser.me/api?page=1&results=20&seed=0308"
	);
	const data = await res.json();
	return DUMMY_formatData(data.results);
};

export const getProducts = async () => {
	// fetch the database collection for products.
	const collectionRef = firestore.collection("products");
	const data = await collectionRef.get();

	// extract the product data from the database, include the document id.
	const products = data.docs.map((item) => ({ ...item.data(), id: item.id }));
	return products;
};

export const getProductByID = async (itemID) => {
	// fetch the database collection for products.
	const collectionRef = firestore.collection("products");
	const data = await collectionRef
		.get()
		.filter((key) => key.includes(itemID));

	// extract the product data from the database, include the document id.
	const products = data.docs.map((item) => ({ ...item.data(), id: item.id }));
	return products;
};

// function to push new items to the database.
/* export const pushItem = async (itemID, itemData) => {
	const response = firestore.collection("products").doc(itemID).set(itemData);
	return response;
};

export const pushItems = async (allItemData) => {
	const responses = Object.keys(allItemData).map((itemID) => {
		const itemData = allItemData[itemID];
		return pushItem(itemID, itemData);
	});

	await Promise.all(responses);

	return responses;
}; */
