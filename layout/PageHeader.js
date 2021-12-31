import { APP_NAME } from "@/config";
import Container from "react-bootstrap/Container";

const PageHeader = ({ title = "" }) => {
	return (
		<Container>
			<h1 className="xD">
				{title} - {APP_NAME}
			</h1>
		</Container>
	);
};

export default PageHeader;
