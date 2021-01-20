import Head from "next/head";
import { Card } from "react-bootstrap";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card className="w-50 h-auto  my-4 mx-auto shadow-lg p-3 mb-5 bg-white rounded">
        <h3 className="text-center m-3">Instruction</h3>
        <ul>
          <li>NextJS company Server Side Rendering</li>
          <li>Individual Pages of Companies (Get started by clicking link in Navbar)</li>
          <li>Styling done using React-Bootstrap Components and SCSS</li>
          <li>On Clicking to logo you will be redirected to home page </li>
        </ul>
      </Card>
    </Layout>
  );
}
