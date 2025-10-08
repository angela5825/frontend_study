import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

// 실제 화면 내용
// 컴포넌트 단위 : assets에 넣는다.
