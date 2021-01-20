import React from "react";
import Surfboard from "../../components/Surfboard";
import axios from "axios";

export default function surfBoard(props) {
	return <Surfboard data={props.data[0]} />;
}

export const getStaticProps = async () => {
	let { data } = await axios.get("https://mistycal98.github.io/static-json-files/surfboard.json");
	return {
		props: {
			data: [...data],
		},
	};
};
