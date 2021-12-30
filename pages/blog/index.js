import { withRouter } from "next/router";
// ACTIONS
// HELPERS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Layout from "@/layout/Layout";
import { getWordPressPosts } from "@/actions/wordpress";
import NothingFoundAlert from "@/layout/NothingFoundAlert";
import SingleWordPressPost from "@/components/singleWordPressPost";
import Content from "@/layout/Container";

export const getServerSideProps = async (context) => {
	const params = `?page=1&per_page=10`;
	const wordPressPostListing = (await getWordPressPosts(params)()) || [];

	return {
		props: {
			params: params,
			serverWordPressListingPosts: wordPressPostListing,
		},
	};
};

const Blog = ({ params, serverWordPressListingPosts, router }) => {
	return (
		<Layout title={`Blog`}>
			<div className="container mt-3">
				<Row>
					{/* <Content> */}
					{serverWordPressListingPosts?.length > 0 ? (
						<div className="col-blog" id="fetch-more">
							{serverWordPressListingPosts.map((wp, index) => (
								<SingleWordPressPost key={wp.id} wp={wp} />
							))}
						</div>
					) : (
						<NothingFoundAlert />
					)}
					{/* </Content> */}
				</Row>
			</div>
		</Layout>
	);
};

export default withRouter(Blog);
