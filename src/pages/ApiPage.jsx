import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";

export default function ApiPage() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://shibe.online/api/shibes");
      const data = await response.json();
      setImage(data);
    }
    getData();
  }, []);
  return (
    <>
      <Link to="/">
        <h2>Home Page</h2>
      </Link>
      <br></br>
      <img src={image[0]} alt="shibe" />
    </>
  );
}
