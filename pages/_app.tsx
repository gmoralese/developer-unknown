import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../src/components/navbar/navbar";
import Footer from "../src/components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Unknown Developer</title>
        <meta name="description" content="Unknown Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bg-black text-white">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
