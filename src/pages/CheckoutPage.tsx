import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/context/CartContext";
import { useProducts } from "../components/context/ProductContext";
import { collectionDataItem, NftItem } from "../data/collections/collection";

function CheckoutPage() {
  const { cart, totalPrice } = useCart();
  const { collections } = useProducts();

  return (
    <div>
      <div style={rootStyle}>
        <div style={purchaseCompleteContainer}>
          <h1>Checkout</h1>
          <h2>Your purchase:</h2>
          <div style={cardContainer}>
            <div style={purchasedItems}>
              {cart.map((item: NftItem, index: number) => (
                <div style={purchasedItemTestCard} key={index}>
                    <div style={itemCountBadge}>
                      <p
                        style={{
                          textAlign: "center",
                          width: "100%",
                          letterSpacing: 0,
                          fontWeight: "bold",
                        }}
                      >
                        {item.count}
                      </p>
                    </div>
                  <div style={cardHeader}>
                    <h3 style={{ margin: 0 }}>
                      {
                        collections.find((col) => col.id === item.collectionID)
                          ?.name
                      }
                      &nbsp;#{item.NFTid}
                    </h3>
                  </div>
                  <div style={cardBody}>
                    <div style={{ width: "100%" }}>
                      <img srcSet={item.image} style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div style={cardFooter}>
                    <div>
                      Price per unit: {item.price} &nbsp;
                      <FontAwesomeIcon
                        icon={faCoins}
                        style={{ marginTop: "0.1rem" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <h2 style={{ marginRight: ".1rem" }}>Total price: {totalPrice}</h2>
            <FontAwesomeIcon icon={faCoins} style={{ marginTop: "1.8rem" }} />
          </div>
          <Link style={nextButton} to="/CheckoutDetails">
            <Button style={buttonStyle} variant="contained" href="">
              Next
            </Button>
          </Link>
        </div>
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
};

const purchaseCompleteContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  background: "#202225",
  marginBottom: "2rem",
};

const purchasedItems: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  gap: "1rem",
  margin: 0,
  flexWrap: "wrap",
};

const purchasedItemTestCard: CSSProperties = {
  boxShadow: "1px 1px 6px black",
  borderRadius: ".5rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  background: "#303339",
  gap: "1rem",
  padding: "1rem",
  width: "20vmin",
  position: 'relative'
};

const cardBody: CSSProperties = {
  width: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const cardFooter: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontSize: "1.5vmin",
};

const cardContainer: CSSProperties = {
  width: "100%",
  borderRadius: ".5rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "1rem",
};

const cardHeader: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2vmin",
};

const buttonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "#2081e2",
  fontSize: "1.5rem",
};

const nextButton: CSSProperties = {
  textDecoration: "none",
};

const itemCountBadge: CSSProperties = {
  position: "absolute",
  top: "-.5rem",
  right: "-.5rem",
  width: "3vmin",
  height: "3vmin",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  fontSize: "1.5vmin",
  color: "white",
  background: "#2081e2",
};
