import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Link, Routes, Route } from "react-router-dom";

/*
BrowserRouter

- HTML History API(pushState,replaceState,popState)를 사용하여
브라우저의 주소를 관리하는 라우터
- 페이지 새로고침 없이도 URL을 변경하고 이에 따라 컴포넌트를 랜더링할 수 있도록 하는 역할 
*/

const App = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

    // browserouter은
  );
};
export default App;
