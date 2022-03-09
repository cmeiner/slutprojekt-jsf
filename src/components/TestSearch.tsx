import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties, useRef } from "react";
import * as yup from "yup";
import { Button } from "@mui/material";
// import TextField from "@material-ui/core/TextField";

const validationSchema = yup.object({
  searchTerm: yup.string().min(3, "minimum 3 letters"),
});

const input = input1;

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
      <form onSubmit={formik.handleSubmit}>
        <TextField
          style={searchBar}
          ref={input}
          fullWidth
          inputProps={{ style: { color: "white" } }}
          // color="success"
          id="standard-basic"
          label="Search..."
          variant="standard"
          name="searchTerm"
          // value={formik.values.searchTerm}
          onChange={formik.handleChange}
          // error={formik.touched.searchTerm && Boolean(formik.errors.searchTerm)}
          // helperText={formik.touched.searchTerm && formik.errors.searchTerm}
        />
      </form>
    </div>
  );
}

function SearchButton() {
  const input1 = useRef(null);

  const handleClick = () => {
    input1.current.focus();
  };

  return (
    <div>
      <Button style={StyledButton} variant="contained" onClick={handleClick}>
        Search for NFT
      </Button>
      <input ref={input1} type="text" name="one" id="one" placeholder="one" />
    </div>
  );
}
const StyledButton: CSSProperties = {
  background: "rgb(32, 129, 226)",
  margin: "1rem",
  fontSize: "2rem",
};

export { SearchBar, SearchButton };

const searchBar: CSSProperties = {
  color: "white",
  paddingLeft: ".2rem",
  paddingRight: ".2rem",
};
