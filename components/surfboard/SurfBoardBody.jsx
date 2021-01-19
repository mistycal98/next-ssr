import React from "react";
import Head from "next/head";
import style from "./surfboard.module.scss";
import Image from "next/image";

function SurfBoardBody(props) {
  return (
    <>
      <Head>
        <title>Surfboard Ventures</title>
        <link rel="shortcut icon" href={props.favicon} />
      </Head>
      <div className={style.bgWrap}>
        <Image src={props.image} alt="Raw Banner" layout="fill" objectFit="cover" quality={100} />
        <div
          className="h-auto position-absolute text-dark text-left w-50"
          style={{ top: "25%", left: "10%", right: "10%" }}
        >
          <h1>{props.content.heading}</h1>
          <p>{props.content.subHeading}</p>
        </div>
      </div>
    </>
  );
}

export default SurfBoardBody;
