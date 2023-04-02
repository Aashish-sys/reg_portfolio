import Head from "next/head";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Regulus</title>
        <meta name="description" content="Regulus-Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Header />
        <Footer />
      </main>
    </>
  );
}
