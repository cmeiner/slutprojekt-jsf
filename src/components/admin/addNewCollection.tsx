import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties, Props, useState } from "react";
import * as yup from "yup";
import { collectionDataItem } from "../../data/collections/collection";
import { useProducts } from "../context/ProductContext";

interface Values {
  collectionName: string;
  collectionImageUrl: string;
  collectionDescription: string;

}


function AddNewCollection () {
  const { collections, addCollection } = useProducts()
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      productImage: "",
    },
    onSubmit: (values) => {
    let newCollection : collectionDataItem = {
      id: 0,
      name: values.name,
      description: values.description,
      volumeTraded: 302,
      floorPrice: 320,
      header: 'not-working',
      productImage: values.productImage,
      NFTS: [],
        }
      addCollection(newCollection)
        formik.resetForm()
    },
     
    });
    return (
    <div>
        <div style={newCollectionContainer}>
            <div>
                <form style={formStyle} onSubmit={formik.handleSubmit}>
                        <h3>Add new collection</h3>
                    <div style={textFieldsContainer}>
                    <TextField
                        style={textFieldStyle}
                        fullWidth
                        autoComplete="off"
                        id="name"
                        name="name"
                        label="Collection Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                        formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        style={textFieldStyle}
                        fullWidth
                        autoComplete="off"
                        id="description"
                        name="description"
                        label="Collection description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={
                        formik.touched.description && Boolean(formik.errors.description)
                        }
                        helperText={formik.touched.description && formik.errors.description}
                    />
                    <TextField
                        style={textFieldStyle}
                        fullWidth
                        autoComplete="off"
                        id="productImage"
                        name="productImage"
                        label="Collection Image URL"
                        value={formik.values.productImage}
                        onChange={formik.handleChange}
                        error={
                        formik.touched.productImage && Boolean(formik.errors.productImage)
                        }
                        helperText={formik.touched.productImage && formik.errors.productImage}
                    />
                    </div>
                    <Button
                    style={{ marginTop: "1rem", width: "40%", marginBottom: "1rem" }}
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    >
                    Add new collection
                    </Button>
                </form>
                </div>
            
        </div>
    </div>
    )}

export default AddNewCollection

const newCollectionContainer: CSSProperties = {
    backgroundColor: "black",
    width: "40rem",
}

const textFieldStyle: CSSProperties = {
  marginBottom: "1rem",
  width: "100%",
  margin: ".5rem",
};

const formStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  flexDirection: "column",
};


const textFieldsContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "30rem",
};