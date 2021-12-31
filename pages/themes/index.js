import { withRouter } from "next/router";
// ACTIONS
// HELPERS
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "@/layout/Layout";
import { getWordPressThemes } from "@/actions/wordpress";
import NothingFoundAlert from "@/layout/NothingFoundAlert";
import SingleWordPressTheme from "@/components/singleWordPressTheme";
import PageHeader from "@/layout/PageHeader";

export const getServerSideProps = async (context) => {
	const params = `/products/?key=caa36abc98b9e352067b20c691e313aa&token=01aac80d63367e87ee3aabfa6f1c3f52&page=-1`;
	const wordPressThemeListing = (await getWordPressThemes(params)()) || [];

	return {
		props: {
			params: params,
			serverWordPressListingThemes: wordPressThemeListing.products,
		},
	};
};

const Portfolio = ({ params, serverWordPressListingThemes, router }) => {
	return (
		<Layout title={`Themes`}>
			<PageHeader title="Themes" />
			<div className="container mt-3">
				<Row>
					<Col>
						{serverWordPressListingThemes?.length > 0 ? (
							serverWordPressListingThemes.map((wptheme, index) => (
								<SingleWordPressTheme key={wptheme.info.id} wp={wptheme.info} />
							))
						) : (
							<NothingFoundAlert />
						)}
					</Col>
				</Row>
			</div>
		</Layout>
	);
};

export default withRouter(Portfolio);
