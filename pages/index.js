import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Hello Index Page</h1>
		</Layout>
	);
}
