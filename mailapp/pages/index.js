import Head from "next/head";
import styles from "../styles/Home.module.css";
import MailPost from "../components/MailPost";

const hey = () => {
  return (
    <>
      <div>
        <Head>
          <title>Email Server</title>
        </Head>
        <MailPost />
      </div>
    </>
  );
};
export default hey;
