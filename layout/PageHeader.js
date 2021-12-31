import Container from "react-bootstrap/Container";

const PageHeader = ({ title = "" }) => {
	return (
		<Container>
			<h1 className="xD">{title}</h1>
		</Container>
	);
};

export default PageHeader;
