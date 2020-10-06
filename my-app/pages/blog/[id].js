import { useEffect, useState } from "react";
import fire from "../../config/fire-config";
import Loader from "react-loader-spinner";
import Link from "next/link";
const Blog = (props) => {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .doc(props.id)
      .get()
      .then((result) => {
        setBlog(result.data());
      });
  }, []);
  if (!blog) {
    return (
      <Loader
        type="TailSpin"
        color="black"
        height={100}
        width={100}
        timeout={9000} //3 secs
      />
    );
  }
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <Link href="/">
        <a style={{ color: "blue" }}>Back</a>
      </Link>
    </div>
  );
};
Blog.getInitialProps = ({ query }) => {
  return {
    id: query.id,
  };
};
export default Blog;
