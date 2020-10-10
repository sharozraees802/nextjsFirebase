import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import fire from "../../config/fire-config";
import { Card } from "react-bootstrap";

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
  }, [null]);
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
  const datadel = (id) => {
    console.log(id);
    fire
      .firestore()
      .collection("datapic")
      .doc(id)
      .delete()
      .then((r) => console.log("success delete", r))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2>Card</h2>
      {datapic.map((item) => {
        return (
          //   <div className="card" key={item.id}>
          //     <img src={item.pic} style={{ width: "50%" }} />
          //     <div className="container">
          //       <h4>
          //         <b>{item.body}</b>
          //       </h4>
          //       <p>{item.title}</p>
          //     </div>
          //   </div>
          <Card style={{ width: "18rem", marginTop: "19px" }} key={item.id}>
            <Card.Img variant="top" src={item.pic} />
            <button onClick={() => datadel(item.id)}>delete</button>
            <Link href="/editdata">
              <a
                style={{
                  marginTop: "17px",
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
                Edit
              </a>
            </Link>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}

      <Link href="/">
        <a
          style={{
            marginTop: "17px",
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
