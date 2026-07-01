import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Features from "../components/Features";
import Faq from "../components/Faq";
import Subscribe from "../components/Subscribe";

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

      <main id="main">
        <Hero />
        <Overview />
        <Features />
        <Faq />
        <Subscribe />
      </main>
    </>
  );
}
