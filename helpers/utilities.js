import showdown from "showdown";
import base64 from "base-64";

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

export const readMEDecoder = (text) => {
	const converter = new showdown.Converter();
	const readMEContentBase64 = base64.decode(text);
	const textConverted = converter.makeHtml(readMEContentBase64);

	return textConverted;
};
