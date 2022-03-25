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
import { collectionDataItem, NftItem } from "../../data/collections/collection";
import { useProducts } from "../context/ProductContext";



function AddNewNFT () {
  const { collections, addNft, addNftModal, closeAddNftModal, selectedCollectionID } = useProducts()
//   const handleChange = (event: any) => {
//     setCollectionID(event.target.value);
//   };
  const formik = useFormik({
    initialValues: {
        collection: 0,
        NFTid: 0,
        nftImage: "",
        description: "",
        price: 0,
      
    },
    onSubmit: (values) => {
    let newNft : NftItem = {
    NFTid: values.NFTid,
    image: values.nftImage,
    description: values.description,
    price: values.price,
    count: 1,
    collectionID: values.collection,
    }
    addNft(newNft, selectedCollectionID)
        formik.resetForm()
        closeAddNftModal()

    },
    });
    return (
    <div>
        {addNftModal &&
                <div style={newCollectionContainer}>
                <div>
                    <form style={formStyle} onSubmit={formik.handleSubmit}>
                        <h3>Add new NFT</h3>
                        {/* <Box style={collectionBox}>
                            <h2>Select collection</h2>
                                <FormControl fullWidth>
                                    <InputLabel id="collection">Collection</InputLabel>
                                    <Select
                                    labelId="collection"
                                    id="collection"
                                    value={selectedCollectionID}
                                    label="Select collection"
                                    onChange={handleChange}
                                    >
                                    {collections.map((collection, index) => (
                                        <MenuItem key={index} value={collection.id}>
                                            {collection.name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            </Box> */}
                        <div style={textFieldsContainer}>
                        <TextField
                            style={textFieldStyle}
                            fullWidth
                            autoComplete="off"
                            id="NFTid"
                            name="NFTid"
                            label="NFT ID"
                            value={formik.values.NFTid}
                            onChange={formik.handleChange}
                            error={
                            formik.touched.NFTid && Boolean(formik.errors.NFTid)
                            }
                            helperText={formik.touched.NFTid && formik.errors.NFTid}
                        />
                        <TextField
                            style={textFieldStyle}
                            fullWidth
                            autoComplete="off"
                            id="nftImage"
                            name="nftImage"
                            label="NFT image URL"
                            value={formik.values.nftImage}
                            onChange={formik.handleChange}
                            error={
                            formik.touched.nftImage && Boolean(formik.errors.nftImage)
                            }
                            helperText={formik.touched.nftImage && formik.errors.nftImage}
                        />
                        <TextField
                            style={textFieldStyle}
                            fullWidth
                            autoComplete="off"
                            id="description"
                            name="description"
                            label="NFT description"
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
                            id="price"
                            name="price"
                            label="Set NFT price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            error={
                            formik.touched.price && Boolean(formik.errors.price)
                            }
                            helperText={formik.touched.price && formik.errors.price}
                        />
                        </div>
                        <Button
                        style={{ marginTop: "1rem", width: "40%", marginBottom: "1rem" }}
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                        >
                        Add new NFT
                        </Button>
                        <Button
                        style={{ marginTop: "1rem", width: "40%", marginBottom: "1rem" }}
                        color="primary"
                        variant="contained"
                        fullWidth
                        onClick={closeAddNftModal}
                        >
                        Close window
                        </Button>
                    </form>
                    </div>
                
            </div> 
        }
    </div>
    )}

export default AddNewNFT;

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

const collectionBox: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "25rem",
  textAlign: "center",
};