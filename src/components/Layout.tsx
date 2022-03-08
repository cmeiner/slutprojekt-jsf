import { CSSProperties } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "../pages/Startpage";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={rootStyle}>
          <Routes>
            <Route path="/" element={<StartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

const rootStyle: CSSProperties = {
  maxWidth: "1250px",
  display: "block",
  margin: "0 auto",
  marginTop: "2rem",
  color: "white",
};

export default Layout;
