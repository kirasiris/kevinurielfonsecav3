import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Meta = ({ meta, categories = [], tags = [], isThemeArchive = false }) => {
	return (
		<>
			<Row>
				<Col xl={`12`}>
					{isThemeArchive ? (
						<>
							{categories?.length > 0 &&
								categories.map((category, index) => (
									<Link
										key={category.id ? category.id : index}
										href={`/themes/category/${category.slug}`}
									>
										<a className="me-1 btn btn-xs btn-default">
											{category.name}
										</a>
									</Link>
								))}

							{tags?.length > 0 && (
								<>
									Tags:
									{tags.map((tag, index) => (
										<Link
											key={tag.id ? tag.id : index}
											href={`/themes/tag/${tag.slug}`}
										>
											<a className="me-1 btn btn-xs btn-default">{tag.name}</a>
										</Link>
									))}
								</>
							)}
						</>
					) : (
						<>
							{categories?.length > 0 &&
								categories.map((category, index) => (
									<Link
										key={category.id ? category.id : index}
										href={`/category/${category.id}/${category.slug}`}
									>
										<a className="me-1 btn btn-xs btn-default">
											{category.name}
										</a>
									</Link>
								))}

							{tags?.length > 0 && (
								<>
									Tags:
									{tags.map((tag, index) => (
										<Link
											key={tag.id ? tag.id : index}
											href={`/tag/${tag.id}/${tag.slug}`}
										>
											<a className="me-1 btn btn-xs btn-default">{tag.name}</a>
										</Link>
									))}
								</>
							)}
						</>
					)}
				</Col>
			</Row>
			<hr />
		</>
	);
};

export default Meta;
