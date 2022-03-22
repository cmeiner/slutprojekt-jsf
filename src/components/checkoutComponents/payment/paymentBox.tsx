import {
  faCreditCardAlt,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DeliveryDataInfo,
  InvoiceDataInfo,
} from "../../../data/collections/deliveryData";
import { CSSProperties } from "react";
import CreditCard from "./paymentOptions/creditCard";
import Swish from "./paymentOptions/swish";
import Invoice from "./paymentOptions/invoice";

interface Props {
  paymentOption: string;
  deliveryInfo: DeliveryDataInfo;
  invoiceDetails: InvoiceDataInfo;
  setInvoiceDetails: any;
}

function PaymentBox(props: Props) {
  return (
    <div style={paymentBox}>
      {props.paymentOption === "swish" && (
        <div style={Box}>
          <div style={paymentIconSwish}>
            <img
              style={paymentIconImg}
              src="/assets/images/Icons/swish-icon.png"
              alt="swish"
            />
          </div>
          <Swish deliveryInfo={props.deliveryInfo} />
        </div>
      )}
      {props.paymentOption === "card" && (
        <div style={Box}>
          <div style={paymentIcon}>
            <FontAwesomeIcon style={CardImg} icon={faCreditCardAlt} />
          </div>
          <CreditCard deliveryInfo={props.deliveryInfo} />
        </div>
      )}
      {props.paymentOption === "invoice" && (
        <div style={Box}>
          <div style={paymentIcon}>
            <FontAwesomeIcon style={CardImg} icon={faFileInvoice} />
          </div>
          <Invoice
            deliveryInfo={props.deliveryInfo}
            invoiceDetails={props.invoiceDetails}
            setInvoiceDetails={props.setInvoiceDetails}
          />
        </div>
      )}
    </div>
  );
}

export default PaymentBox;

const paymentBox: CSSProperties = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const paymentIconSwish: CSSProperties = {
  width: "12rem",
  borderRadius: "20rem",
  marginBottom: "2rem",
};

const paymentIcon: CSSProperties = {
  width: "12rem",
  borderRadius: "2rem",
  color: "white",
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "center",
};

const Box: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const CardImg: CSSProperties = {
  fontSize: "10rem",
};

const paymentIconImg: CSSProperties = {
  width: "12rem",
  borderRadius: "20rem",
};
