import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/tictactoe";
import Home from "./pages/Home";
import ApiPage from "./pages/ApiPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictactoe" element={<Game />} />
        <Route path="/api" element={<ApiPage />} />

      </Routes>
    </Router>
  );
};

export default App;
