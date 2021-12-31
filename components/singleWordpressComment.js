// ACTIONS
// HELPERS
import Spinner from "@/layout/Spinner";
// REACTBOOTSTRAP
import UseImage from "@/layout/UseImage";
import FetchHtml from "@/layout/FetchHtml";
// NESTED COMPONENTS

const singleWordPressComment = ({ comment }) => {
	return comment.id === null || comment.id === undefined ? (
		<Spinner />
	) : (
		<div className="d-flex mb-3" id={`comment-${comment.id}`}>
			<div className="flex-shrink-0">
				<a
					href={`${comment.author_url}`}
					target="_blank"
					rel="noreferrer noopener nofollow"
				>
					<UseImage src={`${comment.author_avatar_urls["48"]}`} />
				</a>
			</div>
			<div className="flex-grow-1 ms-3">
				<a
					href={`${comment.author_url}`}
					target="_blank"
					rel="noreferrer noopener nofollow"
				>
					{comment.author_name}
				</a>
				<FetchHtml text={`${comment.content.rendered}`} />
			</div>
		</div>
	);
};

export default singleWordPressComment;
