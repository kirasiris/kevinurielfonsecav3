import { useEffect, useState } from "react";
import Link from "next/link";
// ACTIONS
// HELPERS
import Spinner from "@/layout/Spinner";
// REACTBOOTSTRAP
import Card from "react-bootstrap/Card";
import UseImage from "@/layout/UseImage";
// NESTED COMPONENTS

const singleWordPressTheme = ({ wp }) => {
	return wp.id === null || wp.id === undefined ? (
		<Spinner />
	) : (
		<article
			className={`${wp.id}-${wp.slug}`}
			data-tag={`${wp.category[0].slug}`}
		>
			<UseImage src={`${wp.thumbnail}`} />
		</article>
	);
};

export default singleWordPressTheme;
