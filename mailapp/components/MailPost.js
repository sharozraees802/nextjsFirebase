import React, { useState } from "react";

const MailPost = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");

  const SendMail = () => {
    console.log(email, subject, body);

    //   fetch("https://api.cloudinary.com/v1_1/livanifyp/image/upload", {
    //     method: "post",
    //     body: data,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setUrl(data.url);
    //       console.log(data);
    //     })
    //     .catch((err) => console.log(err));
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
        Email
        <br />
        <input
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0px",
            borderRadius: "1px solid #ccc",
            boxSizing: "border-box",
          }}
          type="email"
          required="required"
          placeholder="Email...!"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        Subject
        <br />
        <input
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0px",
            borderRadius: "1px solid #ccc",
            boxSizing: "border-box",
          }}
          type="text"
          required="required"
          placeholder="Subject.....!"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div>
        Messege
        <br />
        <textarea
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0px",
            borderRadius: "1px solid #ccc",
            boxSizing: "border-box",
          }}
          placeholder="Messege....!"
          cols="30"
          rows="15"
          value={body}
          required="required"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "115px",
          height: "50px",
          background: "#4E9CAF",
          padding: "10px",
          textAlign: "center",
          borderRadius: "5px",
          marginTop: "10px",
          color: "white",
          fontWeight: "bold",
          lineHeight: "25px",
        }}
        onClick={() => SendMail()}
      >
        Send
      </button>
    </div>
  );
};
export default MailPost;
