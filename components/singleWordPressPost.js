import Link from "next/link";
// ACTIONS
// HELPERS
import Spinner from "@/layout/Spinner";
// REACTBOOTSTRAP
import Card from "react-bootstrap/Card";
import UseImage from "@/layout/UseImage";
import FetchHtml from "@/layout/FetchHtml";
// NESTED COMPONENTS

const singleWordPressPost = ({ wp }) => {
	return wp.id === null || wp.id === undefined ? (
		<Spinner />
	) : (
		<article className={`${wp.id} mb-3`}>
			<Card>
				<UseImage src={`${wp.fimg_url}`} classGiven="card-img" />
				<Card.ImgOverlay
					style={{
						background: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%)`,
					}}
				>
					<h1>
						<Link
							href={`/${wp.id}/${wp.category_name.toLowerCase()}/${wp.slug}`}
						>
							{wp.title.rendered}
						</Link>
					</h1>
					<Card.Text>
						{!wp.excerpt.protected && (
							<Card.Body>
								<FetchHtml text={`${wp.excerpt.rendered}`} />
							</Card.Body>
						)}
					</Card.Text>
					<h2>
						<Link
							href={`/${wp.id}/${wp.category_name.toLowerCase()}/${wp.slug}`}
						>
							<a>Read more</a>
						</Link>
					</h2>
				</Card.ImgOverlay>
			</Card>
		</article>
	);
};

export default singleWordPressPost;
