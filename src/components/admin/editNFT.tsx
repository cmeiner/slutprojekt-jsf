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
import { collectionData, collectionDataItem, NftItem } from "../../data/collections/collection";
import { useProducts } from "../context/ProductContext";



function EditNFT () {

  const { collections, editNft, closeEditNftModal, editNftModal, selectedCollectionID, selectedNftID } = useProducts()
  
  const [selectedCollection, setCollection] = useState(collections.find((collectionItem : collectionDataItem) => selectedCollectionID === collectionItem.id) || {  
    id: 420,
    name: "test",
    description: "test",
    volumeTraded: 1,
    floorPrice: 1,
    header: "test",
    productImage: "test",
    NFTS: [],})
  
    const [selectedNFT, setNft] = useState(selectedCollection.NFTS.find((nft : NftItem) => nft.NFTid === selectedNftID) || {  NFTid: 12, image: "test", price: 12, description: "bollar", count: 12, collectionID: 1}) 
//     const handleCollectionChange = (event: any) => {
    
//     let collection = collections.find((collectionItem : collectionDataItem) => selectedCollectionID === event.target.value)
//     setCollection(collection || 
//         {  
//         id: 420,
//         name: "test",
//         description: "test",
//         volumeTraded: 1,
//         floorPrice: 1,
//         header: "test",
//         productImage: "test",
//         NFTS: [],})
  const formik = useFormik({
    initialValues: {
        collection: 0,
        nftImage: "",
        description: "",
        price: 0,
      
    },
    onSubmit: (values) => {
    let newNft : NftItem = {
    NFTid: selectedNFT.NFTid,
    image: values.nftImage,
    description: values.description,
    price: values.price,
    count: 1,
    collectionID: selectedNFT.collectionID,
    }
    editNft(newNft, selectedCollection?.id)
        formik.resetForm();
        closeEditNftModal()
    },
    });
    return (
    <div>
        {editNftModal && 
                <div style={newCollectionContainer}>
                <div>
                    <form style={formStyle} onSubmit={formik.handleSubmit}>
                        <h3>Edit NFT</h3>
                        <h3>Editing: {selectedNFT.description}</h3>
                            
                        <div style={textFieldsContainer}>
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
                        Save Edit
                        </Button>
                        <Button
                        style={{ marginTop: "1rem", width: "40%", marginBottom: "1rem" }}
                        color="primary"
                        variant="contained"
                        fullWidth
                        onClick={closeEditNftModal}
                        >
                        Close window
                        </Button>
                    </form>
                    </div>
                
            </div>
        }
    </div>
    )}

export default EditNFT

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