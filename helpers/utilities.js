export const getMetaImage = async (url) => {
	if (typeof window !== "undefined") {
		return new Promise(async (resolve, reject) => {
			const img = new Image();
			img.onload = () => resolve(new Image());
			img.onerror = () => reject();
			img.src = url;
		});
	}
};

export const runImage = async (url) => {
	const img = await getMetaImage(url);

	const object = {
		width: img?.width,
		height: img?.height,
	};

	return object;
};
