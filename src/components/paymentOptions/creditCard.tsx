import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties } from "react";
import * as yup from "yup";

interface Values {
  CardNumber: number;
  ExpMonth: number;
  ExpYear: number;
  Cvc: number;
  CardHolder: string;
}

const validationSchema = yup.object({
  CardNumber: yup.number().required("Enter number credit card number").min(16),
  ExpMonth: yup.number().required("Enter expiration month").min(2).max(2),
  ExpYear: yup.number().required("Enter expiration year").min(2),
  Cvc: yup.number().required("Enter CVC number").min(3),
  CardHolder: yup.string().required("Enter card holders name"),
});

function CreditCard() {
  const formik = useFormik({
    initialValues: {
      CardNumber: undefined,
      ExpMonth: undefined,
      ExpYear: undefined,
      Cvc: undefined,
      CardHolder: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div style={creditCardForm}>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          style={CardHolderStyle}
          fullWidth
          id="CardHolder"
          name="CardHolder"
          label="Card Holder"
          value={formik.values.CardHolder}
          onChange={formik.handleChange}
          error={formik.touched.CardHolder && Boolean(formik.errors.CardHolder)}
          helperText={formik.touched.CardHolder && formik.errors.CardHolder}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <TextField
            style={{ width: "45%" }}
            id="CardNumber"
            name="CardNumber"
            label="Card Number"
            value={formik.values.CardNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.CardNumber && Boolean(formik.errors.CardNumber)
            }
            helperText={formik.touched.CardNumber && formik.errors.CardNumber}
          />
          <TextField
            style={{ width: "30%" }}
            id="Cvc"
            name="Cvc"
            label="CVC"
            value={formik.values.Cvc}
            onChange={formik.handleChange}
            error={formik.touched.Cvc && Boolean(formik.errors.Cvc)}
            helperText={formik.touched.Cvc && formik.errors.Cvc}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            style={ExpStyle}
            id="ExpMonth"
            name="ExpMonth"
            label="Expiration month"
            value={formik.values.ExpMonth}
            onChange={formik.handleChange}
            error={formik.touched.ExpMonth && Boolean(formik.errors.ExpMonth)}
            helperText={formik.touched.ExpMonth && formik.errors.ExpMonth}
          />
          <TextField
            style={ExpStyle}
            id="ExpYear"
            name="ExpYear"
            label="Expiration year"
            value={formik.values.ExpYear}
            onChange={formik.handleChange}
            error={formik.touched.ExpYear && Boolean(formik.errors.ExpYear)}
            helperText={formik.touched.ExpYear && formik.errors.ExpYear}
          />
        </div>

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

export default CreditCard;

const creditCardForm: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "50%",
};

const CardHolderStyle: CSSProperties = {
  marginBottom: "1rem",
  width: "70%",
};

const CardNumberStyle: CSSProperties = {
  marginBottom: "1rem",
  width: "70%",
};

const textFieldStyle: CSSProperties = {
  marginBottom: "1rem",
};

const ExpStyle: CSSProperties = {
  width: "34%",
};
