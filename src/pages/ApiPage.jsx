import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";

export default function ApiPage() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function getData() {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => setImage(data.message));
    }
    getData();
  }, []);
  return (
    <>
      <Link to="/">
        <h2>Home Page</h2>
      </Link>
      <br></br>
      <img src={image} alt="dogpicture" />
    </>
  );
}
