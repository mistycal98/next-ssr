import React from "react";
import Head from "next/head";
import style from "./ContentStack.module.scss";
import Image from "next/image";

function ContentStackBody(props) {
  return (
    <>
      <Head>
        <title>Content Management System</title>
        <link rel="shortcut icon" href={props.favicon} />
      </Head>
      <div className={style.bgWrap}>
        <Image src={props.image} alt="Raw Banner" layout="fill" objectFit="cover" quality={100} />
        <div
          className="h-auto position-absolute text-light text-center"
          style={{ top: "30%", left: "20%", right: "20%" }}
        >
          <h1>{props.content.heading}</h1>
          <p>{props.content.subHeading}</p>
        </div>
      </div>
    </>
  );
}

export default ContentStackBody;
