import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { CSSProperties } from "react";
import DeliveryBox from "../components/deliveryBox";

function PaymentPage() {
  return (
    <div style={rootStyle}>
      <div style={checkoutContainer}>
        <h1>Payment Details</h1>
      </div>
    </div>
  );
}

export default PaymentPage;

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
  marginBottom: "2rem",
};

const detailFormContainer: CSSProperties = {
  color: "white",
  width: "45%",
  minWidth: "15rem",
  marginBottom: "2rem",
};

const textFieldStyle: CSSProperties = {
  marginBottom: "1rem",
};

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  background: "grey",
};
