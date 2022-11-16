import Head from "next/head";
import { useAuth } from "../hooks/useAuth";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <Head>
        <title>Game vibes | Home</title>
      </Head>
      <div className={styles.home}>
        <h1>Welcome to Gaming vibe</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eum
          nobis aperiam commodi quas suscipit enim magnam dolorem mollitia
          possimus in repellat praesentium adipisci quidem, vero sed quisquam
          dolore. Voluptatibus dolore est voluptate eius magnam, beatae velit
          dolores labore natus alias laudantium adipisci ab mollitia sapiente,
          perspiciatis odit ullam quam.
        </p>
      </div>
    </>
  );
};

export default Home;
