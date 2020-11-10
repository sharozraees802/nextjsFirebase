import Axios from "axios";
import React, { useState } from "react";

const MailPost = () => {
  const [subject, setSubject] = useState("");
  const [messege, setMessege] = useState("");
  const [email, setEmail] = useState("");

  const SendMail = () => {
    //console.log(email, subject, messege);

    Axios.post(
      "/api/mail",
      {
        email,
        subject,
        messege,
      },
      {
        headers: { "Content-type": "application/json" },
      }
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // fetch("/api/mail", {
    //   method: "post",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({ email, subject, messege }),
    // })
    //   .then((res) => console.log("success", res))
    //   .catch((err) => console.log("error", error));

    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("messege").value = "";
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
          // required="required"
          required
          placeholder="Email...!"
          id="email"
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
          required
          placeholder="Subject.....!"
          id="subject"
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
          value={messege}
          required
          id="messege"
          onChange={(e) => setMessege(e.target.value)}
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
