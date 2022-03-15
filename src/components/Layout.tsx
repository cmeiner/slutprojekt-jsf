import { CSSProperties, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import CheckoutPageDetails from "../pages/CheckoutPageDetails";
import CollectionPage from "../pages/CollectionPage";
import Collections from "../pages/Collections";
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
            <Route path="/" element={<StartPage />} />
            <Route path="/CollectionPage" element={< CollectionPage />}/>
            <Route path="/Collections/:id" element={< Collections />}/>
            <Route
              path="/"
              element={<StartPage focusHeader={() => setSearchFocused(true)} />}
            />
            <Route path="TestPage" element={<TestPage />} />
            <Route path="/Checkout" element={<CheckoutPage />} />
            <Route path="/CheckoutDetails" element={<CheckoutPageDetails />} />
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
