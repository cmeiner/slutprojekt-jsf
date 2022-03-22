import { Button } from "@mui/material";
import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const [localList, setLocalList] = useState(
    JSON.parse(localStorage.getItem("cart")!)
  );
  return (
    <div style={rootStyle}>
      <div style={checkoutContainer}>
        <h2 style={headlineStyle}>Checkout</h2>
        <h2>You are about to purchase the following items:</h2>
        <div style={purchasedItems}>
          {localList.map((item: any, index: number) => (
            <div style={purchasedItemTestCard} key={index}>
              <img alt="test" style={checkoutPic} srcSet={item.image} />
            </div>
          ))}
        </div>

        <h3>Total price: 420 ETH</h3>

        <Link style={nextButton} to="/CheckoutDetails">
          <Button style={buttonStyle} variant="contained" href="">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutPage;

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
  // border: "2px solid #88D9E6",
};

const headlineStyle: CSSProperties = {
  fontSize: "2rem",
};

const checkoutContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  background: "#202225",
  boxShadow: "2px 5px 12px black",
};

const purchasedItems: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  width: "90%",
  height: "30%",
  gap: "1rem",
  margin: 0,
};

const purchasedItemTestCard: CSSProperties = {
  width: "20%",
  flexWrap: 'wrap'
};

const buttonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "#2081e2",
  fontSize: "1.5rem",
};

const nextButton: CSSProperties = {
  textDecoration: "none",
  margin: "2rem",
};

const checkoutPic: CSSProperties = {
  width: '100%'
};
