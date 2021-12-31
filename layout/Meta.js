import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Meta = ({ meta, categories = [], tags = [] }) => {
	return (
		<>
			<Row>
				<Col xl={`12`}>
					{categories?.length > 0 &&
						categories.map((category, index) => (
							<Link key={category.id} href={`/category/${category.slug}`}>
								{category.name}
							</Link>
						))}

					{tags?.length > 0 && (
						<>
							Tags:
							{tags.map((tag, index) => (
								<Link key={tag.id} href={`/tag/${tag.slug}`}>
									{tag.name}
								</Link>
							))}
						</>
					)}
				</Col>
			</Row>
			<hr />
		</>
	);
};

export default Meta;
