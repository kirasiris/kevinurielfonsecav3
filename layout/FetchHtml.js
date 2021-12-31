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
					__html: text.replace(/\n\r?/g, ""),
				}}
			></div>
		)
	);
};

export default FetchHtml;
