import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Search from "./pages/Search";
import User from "./pages/User";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
const App = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const navTo = (path) => {
    navigate(path);
  };
  return (
    <>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        onClick={() => {
          navTo("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navTo("/user/admin");
        }}
      >
        User
      </button>
      <button
        onClick={() => {
          navTo(`/search?keyword=${keyword}`);
        }}
      >
        Search
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>

    // browserouter은
  );
};
export default App;
