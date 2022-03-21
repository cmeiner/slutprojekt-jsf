import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeliveryBox from "../components/deliveryBox";
import PaymentBox from "../components/paymentBox";
import { DeliveryDataInfo } from "../data/collections/deliveryData";

interface Props {
  deliveryInfo: DeliveryDataInfo;
}

// const navigate = useNavigate();

function PaymentPage(props: Props) {
  const handleChange = (event: any) => {
    setPaymentOption(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      paymentOption: "",
    },
    onSubmit: (values) => {
      // navigate("/PaymentPage");
    },
  });
  const [paymentOption, setPaymentOption] = useState("");
  return (
    <div style={rootStyle}>
      <div style={checkoutContainer}>
        <h1>Payment Details</h1>
        <form onSubmit={formik.handleSubmit}>
          <Box style={{ minWidth: 360 }}>
            <FormControl fullWidth>
              <InputLabel id="deliveryOption">Payment option</InputLabel>
              <Select
                labelId="paymentOption"
                id="paymentOption"
                value={paymentOption}
                label="Payment Option"
                onChange={handleChange}
              >
                <MenuItem value={"swish"}>Swish </MenuItem>
                <MenuItem value={"card"}>Card</MenuItem>
                <MenuItem value={"invoice"}>Invoice</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </form>
        <PaymentBox
          paymentOption={paymentOption}
          deliveryInfo={props.deliveryInfo}
        />
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

const checkoutContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  background: "#202225",
  boxShadow: "2px 5px 12px black",
  marginBottom: "2rem",
};
