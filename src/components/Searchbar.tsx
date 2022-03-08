import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties } from "react";
import * as yup from "yup";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

const validationSchema = yup.object({
  searchTerm: yup.string().min(3, "minimum 3 letters"),
});

function SearchBar() {
  const formik = useFormik({
    initialValues: {
      searchTerm: "Search...",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div style={searchBar}>
      <form style={searchBar} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="searchTerm"
          name="searchTerm"
          value={formik.values.searchTerm}
          onChange={formik.handleChange}
          error={formik.touched.searchTerm && Boolean(formik.errors.searchTerm)}
          helperText={formik.touched.searchTerm && formik.errors.searchTerm}
        />
      </form>
    </div>
  );
}

export default SearchBar;

const searchBar: CSSProperties = {
  backgroundColor: "whitesmoke",
  borderRadius: "20rem",
};
