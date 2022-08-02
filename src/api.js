const formatData = (json) => {
	return {};
};

export const getItemData = async () => {
	const res = await fetch(
		"https://randomuser.me/api?page=1&results=20&seed=0308"
	);
	const data = await res.json();
	return data.results;
};
