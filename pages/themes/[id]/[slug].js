import { withRouter } from "next/router";
// ACTIONS
// HELPERS
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "@/layout/Layout";
import { getWordPressTheme } from "@/actions/wordpress";
import PageHeader from "@/layout/PageHeader";
import FetchHtml from "@/layout/FetchHtml";
import UseImage from "@/layout/UseImage";
import Meta from "@/layout/Meta";

export const getServerSideProps = async (context) => {
	const params = `/products/?product=${context.query.id}`;
	const wordPressTheme = (await getWordPressTheme(params)()) || null;

	return {
		props: {
			params: params,
			serverWordPressTheme: wordPressTheme.products,
		},
	};
};

const SinglePortfolio = ({ params, serverWordPressTheme, router }) => {
	return (
		<Layout title={`${serverWordPressTheme[0].info.title}`}>
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
					</Col>
				</Row>
			</div>
		</Layout>
	);
};

export default withRouter(SinglePortfolio);
