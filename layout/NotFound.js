import { withRouter } from "next/router";
import Link from "next/link";
// ACTIONS
// HELPERS
// UTILS
// REACTBOOTSTRAP

const NotFound = ({ router }) => {
	const handlePrev = async (e) => {
		e.preventDefault();
		router.back();
	};
	return (
		<section className={`mb-3`}>
			<div className={`container-fluid m-0 text-center error404`}>
				<h1 className={`display-3`}>404</h1>
				<p className={`lead`}>Page Not Found</p>
				<p className={`lead`}>
					It seems to me that the page you were looking for has been deleted or
					simply did not exist.
				</p>
				<Link href={`/`}>
					<a className={`btn btn-sm btn-dark mr-1`}>Go Home!</a>
				</Link>
				<Link href={`#!`}>
					<a onClick={handlePrev} className={`btn btn-sm btn-dark`}>
						Go Back!
					</a>
				</Link>
			</div>
		</section>
	);
};

export default withRouter(NotFound);
