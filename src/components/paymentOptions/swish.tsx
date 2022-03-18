import { useFormik } from "formik";
import { DeliveryDataInfo } from "../../data/collections/deliveryData";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import { CSSProperties, useState } from "react";


interface deliveryInfo {
  deliveryInfo: DeliveryDataInfo;
}

interface Values {
  number: number;
}

// const validationSchema = yup.object({
//   number: yup.number().required("Please enter number").min(10),
// })


function Swish(props: deliveryInfo) {
  const [swishNumber, setSwishNumber] = useState("");
  const handleChange = (event: any) => {
    setSwishNumber(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      number: 0,
    },
    // validationSchema: validationSchema,
    onSubmit: () => {
      console.log('Hej adam')
    },
  });
  return<div>
    <form onSubmit={formik.handleSubmit}>
      <TextField 
      style={textFieldStyle}
      fullWidth
      id="number"
      name="number"
      label="Phone Number"
      value={formik.values.number}
      onChange={formik.handleChange}
      // error={formik.touched.number && Boolean(formik.errors.number)}
      // helperText={formik.touched.number && formik.errors.number}
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
  </div>;
}

export default Swish;


const textFieldStyle: CSSProperties = {
  marginBottom: "1rem",
};