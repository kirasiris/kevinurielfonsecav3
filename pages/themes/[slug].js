import { withRouter } from "next/router";
// ACTIONS
// HELPERS
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "@/layout/Layout";
import { getWordPressTheme } from "@/actions/wordpress";
import NothingFoundAlert from "@/layout/NothingFoundAlert";
import SingleWordPressTheme from "@/components/singleWordPressTheme";
import PageHeader from "@/layout/PageHeader";

export const getServerSideProps = async (context) => {
	const params = `${context.query.slug}`;
	const wordPressTheme = (await getWordPressTheme(params)()) || null;

	return {
		props: {
			params: params,
			serverWordPressTheme: wordPressTheme,
		},
	};
};

const SinglePortfolio = ({ params, serverWordPressTheme, router }) => {
	console.log(serverWordPressTheme);
	return (
		<Layout title={`Themes`}>
			<PageHeader title="Themes" />
			<div className="container mt-3">
				<Row>
					<Col>SINGLE PORTFOLIO</Col>
				</Row>
			</div>
		</Layout>
	);
};

export default withRouter(SinglePortfolio);
