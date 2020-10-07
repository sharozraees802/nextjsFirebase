import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import fire from "../../config/fire-config";

const data = () => {
  const [datapic, setDatapic] = useState(null);
  useEffect(() => {
    fire
      .firestore()
      .collection("datapic")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDatapic(data);
        console.log("All data", data);
      });
    //   .get()
    //   .then((result) => {
    //     const data = result.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }));
    //     setDatapic(data);
    //     console.log("All Data", data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  if (!datapic) {
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
    <>
      <h2>Card</h2>
      {datapic.map((item) => {
        return (
          <div className="card">
            <img src={item.pic} style={{ width: "100%" }} />
            <div className="container">
              <h4>
                <b>{item.body}</b>
              </h4>
              <p>{item.title}</p>
            </div>
          </div>
        );
      })}

      <Link href="/">
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
          form
        </a>
      </Link>
    </>
  );
};

export default data;
