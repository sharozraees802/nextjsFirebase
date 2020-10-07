import React, { useState, useEffect } from "react";
import Link from "next/link";
import fire from "../config/fire-config";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      fire.firestore().collection("datapic").add({
        title,
        body,
        pic: url,
      });
      setTitle("");
      setBody("");
      setUrl("");
    }
  }, [url]);
  const postDetails = () => {
    // console.log(title, body, image);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "livani");
    data.append("cloud_name", "livanifyp");
    fetch("https://api.cloudinary.com/v1_1/livanifyp/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
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
      <div>
        Image
        <br />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <button type="submit" onClick={() => postDetails()}>
        Save
      </button>
      <div>
        <Link href="getdata/">
          <a
            style={{
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
            data
          </a>
        </Link>
      </div>
    </div>
  );
};
export default CreatePost;
