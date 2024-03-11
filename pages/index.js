import Head from "next/head";
import Link from "next/link";
import Layout from "./_layouts/default";

function Homepage() {
  return (
    <>
      <Head>
        <title>LifeBloom Therapy</title>
        <meta name="description" content="Manually created Nextjs App" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}

export default Homepage;
