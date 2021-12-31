import { withRouter } from "next/router";
// ACTIONS
// HELPERS
import Row from "react-bootstrap/Row";
import Layout from "@/layout/Layout";
import { getWordPressPosts } from "@/actions/wordpress";
import NothingFoundAlert from "@/layout/NothingFoundAlert";
import SingleWordPressPost from "@/components/singleWordPressPost";
import PageHeader from "@/layout/PageHeader";

export const getServerSideProps = async (context) => {
	const params = `?tags=${context.params.id}&page=1&per_page=10`;
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
		<Layout title={`${router.query.name}`}>
			<PageHeader title={`${router.query.name}`} />
			<div className="container mt-3">
				<Row>
					{serverWordPressListingPosts?.length > 0 ? (
						<div className="col-blog" id="fetch-more">
							{serverWordPressListingPosts.map((wp, index) => (
								<SingleWordPressPost key={wp.id} wp={wp} />
							))}
						</div>
					) : (
						<NothingFoundAlert />
					)}
				</Row>
			</div>
		</Layout>
	);
};

export default withRouter(Blog);
