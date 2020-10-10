import Link from "next/link";
import { useState, useEffect } from "react";
import fire from "../../config/fire-config";

const editdata = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const edit = () => {
    // fire.firestore().collection("datapic").doc(id).add({
    //   title,
    //   body,
    // });
    fire
      .firestore()
      .collection("datapic")
      .doc(props.id)
      .update({
        title,
        body,
      })
      .then(() => location.replace("/getdata"))
      .catch((e) => console.log(e));
    setTitle("");
    setBody("");
  };
  return (
    <div>
      <h1>hello</h1>
      <div>
        Title
        <br />
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        Content
        <br />
        <textarea
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit" onClick={() => edit()}>
        Save
      </button>
      <br />
      <Link href="/getdata">
        <a
          style={{
            marginTop: "20px",
            display: "block",
            width: "115px",
            height: "50px",
            background: "#4E9CAF",
            padding: "10px",
            textAlign: "center",
            borderRadius: "5px",
            color: "white",
            fontWeight: "bold",
            lineHeight: "25px",
          }}
        >
          getdata
        </a>
      </Link>
    </div>
  );
};
editdata.getInitialProps = ({ query }) => {
  return {
    id: query.id,
  };
};
export default editdata;
