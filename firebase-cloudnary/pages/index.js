import Head from "next/head";
import styles from "../styles/Home.module.css";
import CreatePost from "../components/CreatePost";

const hey = () => {
  return (
    <>
      <div>
        <Head>
          <title>cloudnary firebase</title>
        </Head>
        <CreatePost />
      </div>
    </>
  );
};
export default hey;
