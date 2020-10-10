import Link from "next/link";

const editdata = () => {
  return (
    <div>
      <h1>hello</h1>
      <Link href="/getdata">
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
          getdata
        </a>
      </Link>
    </div>
  );
};
export default editdata;
