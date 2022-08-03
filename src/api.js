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
