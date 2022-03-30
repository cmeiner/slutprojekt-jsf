import { CSSProperties } from "react";
import { useCart } from "../components/context/CartContext";
import { NftItem } from "../data/collections/collection";
import { DeliveryDataInfo } from "../data/collections/deliveryData";
import { useProducts } from "../components/context/ProductContext";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenerateOrderNumber from "../components/checkoutComponents/OrderNumber";
import DeliveryInfoTableWithPay from "../components/checkoutComponents/DeliveryInfoTableWithPay";

interface Props {
  deliveryInfo: DeliveryDataInfo;
  finalTotalSum: number;
}

function PurchaseComplete(props: Props) {
  const { purchaseList, purchaseTotal } = useCart();
  const { collections } = useProducts();

  let totalSumWithShipping = 0;

  if (props.deliveryInfo.deliveryMethod === "DHL agent") {
    totalSumWithShipping = purchaseTotal + 2;
  } else if (props.deliveryInfo.deliveryMethod === "DHL express") {
    totalSumWithShipping = purchaseTotal + 6;
  } else if (props.deliveryInfo.deliveryMethod === "Postnord home delivery") {
    totalSumWithShipping = purchaseTotal + 4;
  }

  return (
    <div>
      <div style={rootStyle}>
        <div style={purchaseCompleteContainer}>
          <h2 style={{ fontSize: "2rem" }}>Purchase complete!</h2>
          <div>
            <GenerateOrderNumber />
            <h2 style={{ textAlign: "center", marginTop: "0" }}>
              Delivery details
            </h2>
            <DeliveryInfoTableWithPay deliveryInfo={props.deliveryInfo} />
          </div>
          <div style={{ display: "flex" }}>
            <h2 style={{ marginRight: ".1rem" }}>
              Total price: {totalSumWithShipping}
            </h2>
            <FontAwesomeIcon icon={faCoins} style={{ marginTop: "1.8rem" }} />
          </div>
          <h2>Your purchase:</h2>
          <div style={cardContainer}>
            <div style={purchasedItems}>
              {purchaseList.map((item: NftItem, index: number) => (
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
        </div>
      </div>
    </div>
  );
}

export default PurchaseComplete;

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

const cardContainer: CSSProperties = {
  width: "100%",
  borderRadius: ".5rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "1rem",
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
const cardHeader: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2vmin",
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
