import React from "react";
import Surfboard from "../../components/Surfboard";
import Layout from "../../components/Layout";
import axios from "axios";

export default function surfBoard(props) {
  return <Surfboard data={props.data} />;
}

export const getStaticProps = async () => {
  let { data } = await axios.get("https://mistycal98.github.io/static-json-files/surfboard.json");
  return {
    props: {
      data: [...data],
    },
  };
};
