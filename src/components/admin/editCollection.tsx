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



function EditCollection () {

  const { collections, editCollection } = useProducts()
  
  const [selectedCollection, setCollection] = useState(collections[0])
  
    const [selectedNFT, setNft] = useState(collections[0].NFTS[0]) 
  const handleCollectionChange = (event: any) => {
    
    let collection = collections.find((collectionItem : collectionDataItem) => collectionItem.id === event.target.value)
    setCollection(collection || {  
        id: 420,
        name: "test",
        description: "test",
        volumeTraded: 1,
        floorPrice: 1,
        header: "test",
        productImage: "test",
        NFTS: [],})
  };
  const handleNftChange = (event : any) => {
      let nft = selectedCollection.NFTS.find((nft : NftItem) => nft.NFTid === event.target.value)
      setNft(nft || collections[0].NFTS[0])
  }
  const formik = useFormik({
    initialValues: {
        collectionName: "",
        collectionImageUrl: "",
        collectionDescription: "",
        
      
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
    // editNft(newNft, selectedCollection?.id)
    //     formik.resetForm()
    },
    });
    return (
    <div>
        <div style={newCollectionContainer}>
            <div>
                <form style={formStyle} onSubmit={formik.handleSubmit}>
                    <h3>Edit Collection</h3>
                    <h2>Editing: (peta in rätt collection) </h2>
                        
                    <div style={textFieldsContainer}>
                    <TextField
                        style={textFieldStyle}
                        fullWidth
                        autoComplete="off"
                        id="collectionName"
                        name="collectionName"
                        label="Collection name"
                        value={formik.values.collectionName}
                        onChange={formik.handleChange}
                        error={
                        formik.touched.collectionName && Boolean(formik.errors.collectionName)
                        }
                        helperText={formik.touched.collectionName && formik.errors.collectionName}
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
                </form>
                </div>
            
        </div>
    </div>
    )}

export default EditCollection

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