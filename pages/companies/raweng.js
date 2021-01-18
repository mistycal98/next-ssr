import React from "react";
import Raw from "../../components/Raw";
import Layout from "../../components/Layout";
import axios from "axios";

export default function rawengineering(props) {
	return (
		
			<Raw data={props.data} />
		
	);
}

export const getStaticProps = async () => {
	let { data } = await axios.get("https://mistycal98.github.io/static-json-files/raweng.json");
	return {
		props: {
			data: [...data],
		},
	};
};
