import { firestore } from "../firestore";

/* 
	GENERAL PURPOSE DATABASE FUNCTIONS
*/

const getDocumentFromDatabase = async (collection, reference) => {
	// fetch the database collection for products.
	const collectionRef = firestore.collection(collection);
	const docRef = collectionRef.doc(reference);

	// extract the product data from the database, include the document id.
	const document = await docRef.get();
	return {
		...document.data(),
		id: document.id,
	};
};

const updateDocumentProperty = async (
	collection,
	reference,
	property,
	newValue
) => {
	// fetch the database collection for products.
	const collectionRef = firestore.collection(collection);
	const docRef = collectionRef.doc(reference);
	return docRef.update({ [property]: newValue });
};

/* 
	DATABASE PRODUCT FUNCTIONS
*/

export const getProducts = async () => {
	// fetch the database collection for products.
	const collectionRef = firestore.collection("products");
	const data = await collectionRef.get();

	// extract the product data from the database, include the document id.
	return data.docs.map((item) => ({ ...item.data(), id: item.id }));
};

export const getProductByID = async (itemID) => {
	return await getDocumentFromDatabase("products", itemID);
};

export const updateProductStock = async (itemID, newStock) => {
	return updateDocumentProperty("products", itemID, "stock", newStock);
};

/* 
	DATABASE SHOPPING CART - UNUSED (TODO - add remote cart that use cookies.)
*/

export const createShoppingCart = async (cartID) => {};

export const getShoppingCart = async (cartID) => {
	return await getDocumentFromDatabase("carts", cartID);
};

export const addItemToCart = async (cartID, productID, qty = 1) => {};

export const removeItemFromCart = async (cartID, productID, qty = 1) => {};

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
