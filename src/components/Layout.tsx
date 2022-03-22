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
import PaymentPage from "./checkoutComponents/payment/PaymentPage";
import {
  DeliveryDataInfoObject,
  InvoiceDataInfoObject,
} from "../data/collections/deliveryData";
import PurchaseComplete from "../pages/PurchaseComplete";

function Layout() {
  const [modalState, setModalState] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState(DeliveryDataInfoObject);
  const [InvoiceDetails, setInvoiceDetails] = useState(InvoiceDataInfoObject);
  return (
    <div>
      <BrowserRouter>
        <Header
          modalState={modalState}
          setModalState={setModalState}
          searchBarFocused={searchFocused}
          searchBarFocusOut={() => setSearchFocused(false)}
        />
        <CartModal modalState={modalState} setModalState={setModalState} />
        <div style={rootStyle}>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/CollectionPage" element={<CollectionPage />} />
            <Route path="/Collections/:id" element={<Collections />} />
            <Route
              path="/"
              element={<StartPage focusHeader={() => setSearchFocused(true)} />}
            />
            <Route path="TestPage" element={<TestPage />} />
            <Route path="/Checkout" element={<CheckoutPage />} />
            <Route
              path="/CheckoutDetails"
              element={
                <CheckoutPageDetails
                  deliveryInfo={deliveryInfo}
                  setDeliveryInfo={setDeliveryInfo}
                  invoiceDetails={InvoiceDetails}
                  setInvoiceDetails={setInvoiceDetails}
                />
              }
            />
            <Route
              path="/PaymentPage"
              element={
                <PaymentPage
                  deliveryInfo={deliveryInfo}
                  invoiceDetails={InvoiceDetails}
                  setInvoiceDetails={setInvoiceDetails}
                />
              }
            />

            <Route
              path="/PurchaseComplete"
              element={
                <PurchaseComplete
                  deliveryInfo={deliveryInfo}
                  invoiceDetails={InvoiceDetails}
                />
              }
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
