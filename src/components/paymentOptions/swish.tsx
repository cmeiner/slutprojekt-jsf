import { useFormik } from "formik";
import { DeliveryDataInfo } from "../../data/collections/deliveryData";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import { CSSProperties, useState } from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";

interface deliveryInfo {
  deliveryInfo: DeliveryDataInfo;
}

interface Values {
  number: number;
}

const validationSchema = yup.object({
  // number: yup.number().required("Please enter number").min(10),
  number: yup
    .string()
    .typeError("Not a valid phone number. Example: 0738986845")
    .max(10, "Not a valid phone number. Example: 0738986845")
    .matches(/([0-9]{10})/, "Not a valid phone number. Example: 0738986845")
    .required("Phone number date is required"),
});

function Swish(props: deliveryInfo) {
  // const [swishNumber, setSwishNumber] = useState("");
  // const handleChange = (event: any) => {
  //   setSwishNumber(event.target.value);
  // };
  const formik = useFormik({
    initialValues: {
      number: props.deliveryInfo.number,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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
  );
}

export default Swish;

const textFieldStyle: CSSProperties = {
  marginBottom: "1rem",
};
