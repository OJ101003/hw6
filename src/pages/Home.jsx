import { Link } from "react-router-dom/dist";
export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <br></br>
      <h2>This is my home page, where you can navigate to different pages</h2>
      <ul>
        <li>
          <Link to="/tictactoe">TicTacToe</Link>
          <br></br>
          <Link to="/api">API Consumption page</Link>
        </li>
      </ul>
    </>
  );
}
