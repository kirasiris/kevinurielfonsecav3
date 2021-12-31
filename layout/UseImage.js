import Link from "next/link";
const myLoader = ({ src, width, quality }) => {
	return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const UseImage = ({
	linkGiven = "#!",
	src = ``,
	alt = ``,
	idGiven = ``,
	classGiven = `img-fluid`,
	width = ``,
	height = ``,
	style,
	props,
}) => {
	return (
		<Link href={linkGiven}>
			<img
				src={`${src}`}
				alt={`${alt}`}
				id={`${idGiven}`}
				className={`${classGiven}`}
				width={`${width}`}
				height={`${height}`}
				loading={`lazy`}
				style={style}
			/>
		</Link>
	);
};
export default UseImage;
