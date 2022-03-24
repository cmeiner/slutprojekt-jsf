import { Button, Card } from "@mui/material";
import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import { collectionData } from "../data/collections/collection";
import ItemCard from "../components/ItemCard";
import CartModal from "../components/CartModal";
import { useProducts } from "../components/context/ProductContext";

interface startPageProps {
  focusHeader?: any;
  cartState : any
  setCart : any
}

function StartPage(startPageProps: any) {

  const { collections } = useProducts()


  return (
    <div style={rootStyle}>
      <div style={contentContainer}>
        <Link style={linkButtonStyle} to="/CheckoutDetails">
          <Button style={StyledButton} variant="contained" href="">
            CHECKOUT
          </Button>
        </Link>
        <Link style={linkButtonStyle} to="/Admin">
          <Button style={StyledButton} variant="contained" href="">
            ADMIN
          </Button>
        </Link>
        <div style={startPageWelcomeText}>
          <h2 style={startPageHeadline}>
            Buy extreme NFTs and don't look back!
          </h2>
          <p style={headlineSubText}>
            Are you looking for insane NFTs? Do you want to make money quick?
            You've come to the right place. NFT Heaven is the worlds latest and
            smallest NFT-website.
          </p>
          <div style={startPageLinkButtonContainer}>
            <Link style={linkButtonStyle} to="/CollectionPage">
              <Button style={StyledButton} variant="contained" href="">
                EXPLORE
              </Button>
            </Link>
          </div>
        </div>
        <div style={hottestStyle}>
          <div style={hottestTitle}>
            <h1>HOTTEST COLLECTIONS RIGHT NOW</h1>
          </div>
          <div style={flexProducts}>
            {collections.map((collection, index) => (
              <ItemCard key={index} collectionCard={collection}/>
            ))}
          </div>
        </div>
        <div style={hottestItems}>
          <h1>HOTTEST ITEMS RIGHT NOW</h1>
          <div style={flexItems}>
            {collections.map((collection, index) => (
              <ItemCard key={index} nftCard={collection.NFTS[0]} nftHeader={collection?.header} collectionName={collection?.name}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
  // border: "2px solid #88D9E6",
};

const startPageHeadline: CSSProperties = {
  fontSize: "2rem",
};

const headlineSubText: CSSProperties = {
  maxWidth: "30rem",
};

const flexProducts: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  flexDirection: "row-reverse",
  justifyContent: "space-around",
  marginTop: "5rem",
};

const flexItems: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "space-around",
  padding: '2rem'
};

const startPageWelcomeText: CSSProperties = {
  maxWidth: "40rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const contentContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

const startPageLinkButtonContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const linkButtonStyle: CSSProperties = {
  textDecoration: "none",
};

const StyledButton: CSSProperties = {
  background: "#002f6b",
  margin: "1rem",
  fontSize: "2rem",
  fontWeight: 'bold'
};

const hottestStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const hottestTitle: CSSProperties = {};

const hottestItems: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "5rem",
};
