import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import { getResumeContent } from "../helpers/content.helper";

interface HomeProps {
  content: string;
}

export async function getStaticProps() {
  const content = await getResumeContent();
  return {
    props: {
      content,
    },
  };
}

const Home: NextPage<HomeProps> = ({ content }) => {
  return (<main className={styles.main} dangerouslySetInnerHTML={{ __html: content }}>
  </main>);
};

export default Home;
