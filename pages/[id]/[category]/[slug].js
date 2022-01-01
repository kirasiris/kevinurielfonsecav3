import { withRouter } from "next/router";
// ACTIONS
// HELPERS
import Row from "react-bootstrap/Row";
import Layout from "@/layout/Layout";
import {
	getWordPressPost,
	getWordPressComments,
	getWordPressCategories,
	getWordPressTags,
} from "@/actions/wordpress";
import SingleWordPressComment from "@/components/singleWordPressComment";
import Content from "@/layout/Container";
import Sidebar from "@/layout/Sidebar";
import PageHeader from "@/layout/PageHeader";
import Meta from "@/layout/Meta";
import FetchHtml from "@/layout/FetchHtml";

export const getServerSideProps = async (context) => {
	const params = `${context.query.id}`;
	const postId = `?post=${context.query.id}`;
	const wordPressPost = (await getWordPressPost(params)()) || null;
	const wordPressComments = (await getWordPressComments(postId)()) || [];
	const wordpressCategories = (await getWordPressCategories(postId)()) || [];
	const wordPressTags = (await getWordPressTags(postId)()) || [];

	return {
		props: {
			params: params,
			serverWordPressPost: wordPressPost,
			serverWordPressComments: wordPressComments,
			serverWordPressCategories: wordpressCategories,
			serverWordPressTags: wordPressTags,
		},
	};
};

const SingleBlog = ({
	params,
	serverWordPressPost,
	serverWordPressComments,
	serverWordPressCategories,
	serverWordPressTags,
	router,
}) => {
	return (
		<Layout
			title={`${serverWordPressPost.title.rendered}`}
			description={`${serverWordPressPost.excerpt.rendered}`}
			postImage={`${serverWordPressPost.fimg_url}`}
			createdAt={`${serverWordPressPost.date}`}
			updatedAt={`${serverWordPressPost.modified}`}
		>
			<PageHeader title={`${serverWordPressPost.title.rendered}`} />
			<div className="container mt-3">
				<Meta
					meta={serverWordPressPost}
					categories={serverWordPressCategories}
					tags={serverWordPressTags}
				/>
				<Row>
					{serverWordPressPost.template === `template-full-width.php` ? (
						<Content fullWidth>
							<FetchHtml text={serverWordPressPost.content.rendered} />
						</Content>
					) : (
						<>
							<Content>
								<FetchHtml text={serverWordPressPost.content.rendered} />
							</Content>
							<Sidebar>SIDEBAR</Sidebar>
						</>
					)}
					{serverWordPressComments?.length > 0 && (
						<Content fullWidth>
							<h1>COMMENTS</h1>
							{serverWordPressComments.map((comment, index) => (
								<SingleWordPressComment key={comment.id} comment={comment} />
							))}
						</Content>
					)}
				</Row>
			</div>
		</Layout>
	);
};

export default withRouter(SingleBlog);
