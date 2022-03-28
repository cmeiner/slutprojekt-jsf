import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties, useState } from "react";
import PaymentBox from "./paymentBox";
import { DeliveryDataInfo } from "../../../data/collections/deliveryData";
import DeliveryInfoTable from "../DeliveryInfoTable";
import TotalSumWithShipping from "./TotalSumWithShipping";

interface Props {
  deliveryInfo: DeliveryDataInfo;
  setDeliveryInfo: any;
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
        <h2 style={headlineStyle}>Checkout</h2>
        <div>
          <DeliveryInfoTable deliveryInfo={props.deliveryInfo} />
        </div>
        <div>
          <TotalSumWithShipping deliveryInfo={props.deliveryInfo} />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Payment details</h2>
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
          setDeliveryInfo={props.setDeliveryInfo}
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

const headlineStyle: CSSProperties = {
  fontSize: "2rem",
};
