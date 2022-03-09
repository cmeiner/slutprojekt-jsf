import { CSSProperties, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "../pages/Startpage";
import TestPage from "../pages/TestPage";
import Header from "./Header";

function Layout() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header
          searchBarFocused={searchFocused}
          searchBarFocusOut={() => setSearchFocused(false)}
        />
        <div style={rootStyle}>
          <Routes>
            <Route
              path="/"
              element={<StartPage focusHeader={() => setSearchFocused(true)} />}
            />
            <Route path="testpage" element={<TestPage />} />
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
