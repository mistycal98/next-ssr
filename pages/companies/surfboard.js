import React from "react";
import Surfboard from "../../components/Surfboard";
import Layout from "../../components/Layout";

export default function surfBoard(props) {
	return (
		<Layout>
			<Surfboard data={props.data} />
		</Layout>
	);
}

export const getStaticProps = async () => {
	let { data } = await axios.get("https://mistycal98.github.io/static-json-files/surfboard.json");
	return {
		props: {
			data: [...data],
		},
	};
};
