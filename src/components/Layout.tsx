import { CSSProperties, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import CheckoutPageDetails from "../pages/CheckoutPageDetails";
import CollectionPage from "../pages/CollectionPage";
import Collections from "../pages/Collections";
import StartPage from "../pages/Startpage";
import TestPage from "../pages/TestPage";
import CartModal from "./CartModal";
import Header from "./Header";
import PaymentPage from "../pages/PaymentPage";
import { DeliveryDataInfoObject } from "../data/collections/deliveryData";

interface NftItem {
  NFTid: number;
  image: string;
  price: number;
  description: string;
}


function Layout() {
  const [modalState, setModalState] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState(DeliveryDataInfoObject);
  const [cart, setCart] = useState([])
  return (
    <div>
      <BrowserRouter>
        <Header
          modalState={modalState}
          setModalState={setModalState}
          searchBarFocused={searchFocused}
          searchBarFocusOut={() => setSearchFocused(false)}
        />
        <CartModal modalState={modalState} setModalState={setModalState} cartState={cart} setCart={setCart}/>
        <div style={rootStyle}>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/CollectionPage" element={<CollectionPage />} />
            <Route path="/Collections/:id" element={<Collections />} />
            <Route
              path="/"
              element={<StartPage focusHeader={() => setSearchFocused(true)}  cartState={cart} setCart={setCart} />}
            />
            <Route path="TestPage" element={<TestPage />} />
            <Route path="/Checkout" element={<CheckoutPage />} />
            <Route
              path="/CheckoutDetails"
              element={
                <CheckoutPageDetails
                  deliveryInfo={deliveryInfo}
                  setDeliveryInfo={setDeliveryInfo}
                />
              }
            />
            <Route
              path="/PaymentPage"
              element={<PaymentPage deliveryInfo={deliveryInfo} />}
            />
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
