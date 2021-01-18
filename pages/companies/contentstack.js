import React from "react";
import Contentstack from "../../components/Contentstack";
import Layout from "../../components/Layout";
import axios from "axios";

export default function contentStack(props) {
	return <Contentstack data={props.data} />;
}

export const getStaticProps = async () => {
	let { data } = await axios.get("https://mistycal98.github.io/static-json-files/contentstack.json");
	return {
		props: {
			data: [...data],
		},
	};
};
