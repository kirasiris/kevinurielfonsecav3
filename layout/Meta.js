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
										{category.name}
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
											{tag.name}
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
										{category.name}
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
											{tag.name}
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
