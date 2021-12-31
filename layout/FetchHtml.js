import ReactHtmlParser from "react-html-parser";
// ACTIONS
// HELPERS
// REACTBOOTSTRAP
// NESTED COMPONENTS

const FetchHtml = ({ text = `` }) => {
	return (
		text && (
			<div
				className="fetchHtml"
				dangerouslySetInnerHTML={{
					__html: ReactHtmlParser(text.replace(/\n\r?/g, "<br />")),
				}}
			></div>
		)
	);
};

export default FetchHtml;
