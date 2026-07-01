import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Markr — AI Assessment for K–12 Schools</title>
      </Head>

      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <main id="main">{/* sections added incrementally */}</main>
    </>
  );
}
