import { useState } from "react";
import { getDelivery } from "./deliverySwitch";
import { CSSProperties } from "react";
import TotalSumWithShipping from "../payment/TotalSumWithShipping";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface deliveryItem {
  deliveryOption: string;
}

function DeliveryBox(props: deliveryItem) {
  return (
    <div>
      {props.deliveryOption && (
        <div style={deliveryOptionDescription}>
          <div style={{display: "flex"}}>
          <img
            style={deliveryOptionThumbnail}
            srcSet={getDelivery(props.deliveryOption).image}
            alt="ICON"
          />
          <p style={deliveryDescription}>
            {getDelivery(props.deliveryOption).description}
          </p>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <p> Shipping price: {getDelivery(props.deliveryOption).price} </p>
            <FontAwesomeIcon icon={faCoins} style={{marginLeft: ".3rem"}} />
          </div>
        </div>
      )}
      <div style={deliveryDateText}>
        <p>{getDelivery(props.deliveryOption).time}</p>
      </div>
    </div>
  );
}

export default DeliveryBox;

const deliveryOptionDescription: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const deliveryDescription: CSSProperties = {
  fontSize: ".8rem",
  display: "flex", 
  alignItems: "center",
};

const deliveryOptionThumbnail: CSSProperties = {
  padding: "0.5rem",
  height: "4rem",
  borderRadius: "50%",
};

const deliveryDateText: CSSProperties = {
  textAlign: "center",
  fontSize: "1.2rem",
};
