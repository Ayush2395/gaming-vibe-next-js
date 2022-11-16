import Head from "next/head";
import styles from "../styles/Guide.module.css";

function Guide() {
  return (
    <>
      <Head>
        <title>Game vibe | Guide</title>
      </Head>
      <div className={styles.guides}>
        <h2>Guide page</h2>
      </div>
    </>
  );
}

export default Guide;
