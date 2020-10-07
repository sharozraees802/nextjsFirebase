import Link from "next/link";

const data = () => {
  return (
    <>
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
