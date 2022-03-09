import { TextField, withStyles } from "@mui/material";
import console from "console";
import { useFormik } from "formik";
import { CSSProperties, useEffect, useState, useRef } from "react";
import * as yup from "yup";
// import Button from "@material-ui/core/Button";

const validationSchema = yup.object({
  searchTerm: yup.string().min(3, "minimum 3 letters"),
});

function SearchBar() {
function SearchBar(props: any) {
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      if (props.isFocused) {
        inputRef.current.focus();
      }

      inputRef.current.addEventListener("focusout", () => {
        props.focusOut();
      });
    }
  }, [props.isFocused]);

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
    <div>

    <div style={searchBar}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          style={searchBar}
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
          </div>
          inputRef={inputRef}
          // error={formik.touched.searchTerm && Boolean(formik.errors.searchTerm)}
          // helperText={formik.touched.searchTerm && formik.errors.searchTerm}
        />
      </form>
    </div>
  );
}

export default SearchBar;

const searchBar: CSSProperties = {
  color: "white",
  paddingLeft: ".2rem",
  paddingRight: ".2rem",
};
