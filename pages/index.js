import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Markr — AI Assessment for K–12 Schools</title>
      </Head>

      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Nav />

      <main id="main">{/* sections added incrementally */}</main>
    </>
  );
}
