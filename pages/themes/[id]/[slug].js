import { withRouter } from "next/router";
// ACTIONS
// HELPERS
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "@/layout/Layout";
import {
	getWordPressTheme,
	getWordPressThemeReadMe,
} from "@/actions/wordpress";
import PageHeader from "@/layout/PageHeader";
import FetchHtml from "@/layout/FetchHtml";
import UseImage from "@/layout/UseImage";
import Meta from "@/layout/Meta";

export const getServerSideProps = async (context) => {
	const params = `/products/?product=${context.query.id}`;
	const wordPressTheme = (await getWordPressTheme(params)()) || null;

	const wordPressThemeReadMe =
		(await getWordPressThemeReadMe(
			wordPressTheme.products[0].info.title.toLowerCase().replace(/\s/gm, "")
		)()) || null;

	return {
		props: {
			params: params,
			serverWordPressTheme: wordPressTheme.products,
			serverWordPressThemeReadMe: wordPressThemeReadMe,
		},
	};
};

const SinglePortfolio = ({
	params,
	serverWordPressTheme,
	serverWordPressThemeReadMe,
	router,
}) => {
	return (
		<Layout
			title={`${serverWordPressTheme[0].info.title}`}
			description={`${serverWordPressTheme[0].info.excerpt}`}
			postImage={`${serverWordPressTheme[0].info.thumbnail}`}
			createdAt={`${serverWordPressTheme[0].info.create_date}`}
			updatedAt={`${serverWordPressTheme[0].info.modified_date}`}
		>
			<PageHeader title="Themes" />
			<div className="container mt-3">
				<Meta
					meta={serverWordPressTheme[0]}
					categories={serverWordPressTheme[0].info.category}
					tags={serverWordPressTheme[0].info.tags}
					isThemeArchive={true}
				/>
				<Row>
					<Col lg={`7`}>
						<article
							className={`${serverWordPressTheme[0].info.id}-${serverWordPressTheme[0].info.slug}`}
						>
							<UseImage src={`${serverWordPressTheme[0].info.thumbnail}`} />
						</article>
					</Col>
					<Col lg={`5`}>
						<FetchHtml text={serverWordPressTheme[0].info.content} />

						{serverWordPressThemeReadMe.status !== 404 && (
							<>
								<hr />
								{serverWordPressThemeReadMe}
							</>
						)}
					</Col>
				</Row>
			</div>
		</Layout>
	);
};

export default withRouter(SinglePortfolio);
