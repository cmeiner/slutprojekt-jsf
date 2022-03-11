import { Button } from "@mui/material";
import { flexbox, width } from "@mui/system";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  return (
    <div style={rootStyle}>
      <div style={checkoutContainer}>
        <h2 style={headlineStyle}>Checkout</h2>
        <h2>Your purchase: </h2>
        <div style={purchasedItems}>
          <div style={purchasedItemTestCard}>NFT 1</div>
          <div style={purchasedItemTestCard}>NFT 2</div>
          <div style={purchasedItemTestCard}>NFT 3</div>
          <div style={purchasedItemTestCard}>NFT 4</div>
          <div style={purchasedItemTestCard}>NFT 5</div>
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
  height: "15rem",
  width: "20%",
  background: "green",
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
