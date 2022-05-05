import Footer from "./footer";
import Header from "./header";

import styles from "../styles/Layout.module.css";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactChild;
}

export default function Layout({ children }: LayoutProps) {
  return (

    <div className={styles.container}>
      <Head>
        <title>Matt’s Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <>
        {children}
      </>
      <Footer />
    </div>
  );
}
