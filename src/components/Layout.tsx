import { CSSProperties } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionPage from "../pages/CollectionPage";
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
            <Route path="/CollectionPage" element={< CollectionPage/>}/>
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
