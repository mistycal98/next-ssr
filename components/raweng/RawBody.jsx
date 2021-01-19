import React from "react";
import Head from "next/head";
import Image from "next/image";
import style from "./raweng.module.scss";

function RawBody(props) {
	console.log(props);
	return (
		<div>
			<Head>
				<title>Raw Engineering</title>
				<link rel="shortcut icon" href={props.favicon} />
			</Head>
			<div className={style.bgWrap}>
				<Image src={props.image} alt="Raw Banner" layout="fill" objectFit="cover" quality={100} />
				<div className="h-auto position-absolute text-light text-center" style={{top:"25%",left:"10%",right:"10%"}}>
				
					<h1>{props.heading}</h1>
					<p>{props.subHeading}</p>
				</div>
			</div>
		</div>
	);
}

export default RawBody;
