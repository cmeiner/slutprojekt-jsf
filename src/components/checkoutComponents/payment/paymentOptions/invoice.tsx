import { Button } from "@mui/material";
import { CSSProperties } from "react";
import { DeliveryDataInfo } from "../../../../data/collections/deliveryData";
import { useCart } from "../../../context/CartContext";

interface Props {
  deliveryInfo: DeliveryDataInfo;
  setDeliveryInfo: any;
}

function Invoice(props: Props) {
  const { addPurchaseList, cart, clearCart, totalPrice, newPurchaseTotal } = useCart()
  const completePayment = (props: Props) => {
    let newObject = props.deliveryInfo;
    newObject.paymentMethod = "Card";
    props.setDeliveryInfo(newObject);
    addPurchaseList(cart)
    newPurchaseTotal(totalPrice)
    clearCart()
  };
  return (
    <div style={invoiceInfoBox}>
      <p>
        When choosing invoice as the payment option, the invoice will be sent
        together with your order to your chosen delivery address.
      </p>
      <Button
        style={{ marginTop: "1rem", marginBottom: "1rem", width: "70%" }}
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => completePayment(props)}
      >
        Complete purchase
      </Button>
    </div>
  );
}

export default Invoice;

const invoiceInfoBox: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "40%",
};
