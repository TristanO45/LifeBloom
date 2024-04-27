import Head from "next/head";
import Link from "next/link";
import Layout from "./default";

function Homepage() {
  return (
    <>
      <Head>
        <title>LifeBloom Therapy</title>
        <meta name="description" content="Manually created Nextjs App" />
        <link rel="icon" href="/favicon/favicon.png" />
      </Head>
      <Layout />
    </>
  );
}

export default Homepage;
