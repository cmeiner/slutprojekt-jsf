import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DeliveryDataInfo,
  InvoiceDataInfo,
} from "../../../../data/collections/deliveryData";
import * as yup from "yup";

interface deliveryInfo {
  deliveryInfo: DeliveryDataInfo;
  invoiceDetails: InvoiceDataInfo;
  setInvoiceDetails: any;
}

const validationSchema = yup.object({
  firstName: yup.string().required("Please enter first name").min(2),
  lastName: yup.string().required("Please enter last name").min(2),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  number: yup.number().required("Please enter number").min(10),
  zipCode: yup.number().required("Please enter zipcode").min(4),
  city: yup.string().required("Please enter your city").min(2),
  address: yup.string().required("Please enter your adress").min(8),
  country: yup.string().required("Please enter your country").min(2),
});

function Invoice(props: deliveryInfo) {
  const [newDetails, setNewDetails] = useState(false);
  const NewInvoiceDetails = () => setNewDetails(true);
  const UseSameDetails = () => navigate("/PurchaseComplete");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      deliveryMethod: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //   values.deliveryMethod = deliveryOption;
      props.setInvoiceDetails(values);
      console.log(props.invoiceDetails);
      navigate("/PaymentPage");
    },
  });

  return (
    <div>
      <div>
        <h2>Invoice</h2>
        <Button
          style={{ marginTop: "1rem" }}
          color="primary"
          variant="contained"
          fullWidth
          onClick={UseSameDetails}
        >
          Use same as delivery information.
        </Button>
        <h2>Or</h2>
        <Button
          style={{ marginTop: "1rem" }}
          color="primary"
          variant="contained"
          fullWidth
          onClick={NewInvoiceDetails}
        >
          Enter new information
        </Button>
      </div>
      <div>
        {newDetails === true && (
          <div style={detailFormContainer}>
            <h2>Invoice details</h2>
            <div style={formStyle}>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  id="number"
                  name="number"
                  label="Phone Number"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  error={formik.touched.number && Boolean(formik.errors.number)}
                  helperText={formik.touched.number && formik.errors.number}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  id="address"
                  name="address"
                  label="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  id="zipCode"
                  name="zipCode"
                  label="Zip code"
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.zipCode && Boolean(formik.errors.zipCode)
                  }
                  helperText={formik.touched.zipCode && formik.errors.zipCode}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  id="city"
                  name="city"
                  label="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  id="country"
                  name="country"
                  label="Country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />

                <Button
                  style={{ marginTop: "1rem" }}
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Invoice;

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
