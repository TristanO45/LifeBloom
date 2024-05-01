import Head from "next/head";
import Layout from "./default";

function Homepage() {
  return (
    <>
      <Head>
        <title>LifeBloom Therapy</title>
        <meta name="description" content="Therapy Services in California" />
        <link rel="icon" href="/favicon/favicon.png" />
      </Head>
      <Layout />
    </>
  );
}

export default Homepage;
