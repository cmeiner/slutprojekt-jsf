import { useState } from "react";
import { getDelivery } from "../functions/deliverySwitch";
import { CSSProperties } from "react";

interface deliveryItem {
  DeliveryOption: string;
}

function DeliveryBox(props: deliveryItem) {
  //   let date = new Date();
  //   //console.log(date.getDate() + 2);
  //   console.log(`2022-${date.getMonth() + 1}-${date.getDate() + 2}`);
  return (
    <div>
      {props.DeliveryOption && (
        <div style={deliveryOptionDescription}>
          <img
            style={deliveryOptionThumbnail}
            srcSet={getDelivery(props.DeliveryOption).image}
            alt="ICON"
          />
          <p style={deliveryDescription}>
            {getDelivery(props.DeliveryOption).description}
          </p>
        </div>
      )}
      <div style={deliveryDateText}>
        <p>{getDelivery(props.DeliveryOption).time}</p>
      </div>
    </div>
  );
}

export default DeliveryBox;

const deliveryOptionDescription: CSSProperties = {
  display: "flex",
  alignItems: "center",
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const deliveryDescription: CSSProperties = {
  fontSize: ".8rem",
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
