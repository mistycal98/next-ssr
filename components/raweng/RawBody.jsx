import React from "react";
import Head from "next/head";

function RawBody(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Raw Engineering</title>
        <link rel="shortcut icon" href={props.favicon} />
      </Head>
      <div bg={props.image}></div>
    </div>
  );
}

export default RawBody;
