import { Button, Card } from "@mui/material";
import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/card";
import SearchButton from "../components/SearchButton";
import { collectionData } from "../data/collections/collection";

function StartPage() {
  const [collectionList, setCollectionList] = useState(collectionData);
  const [featuredList, setFeaturedList] = useState([{}]);

  let newList = collectionList;
  while (newList.length < 3) {
    newList.filter(function (el) {
      return el.floorPrice < 10;
    });
  }

  console.log(newList);

  function getFeatured() {
    //     CollectionList får vi ut alla kollektioner
    //     Filtrera så dem mest med FLOOR PRICE & BEST VOLUME TRADED
    //     TOP 3 AV DEM SÄTTS IN I NYA FEATUREDLIST
    //     let list = collectionList
    //     list.sort(function compareFn(firstEl, secondEl)
    //     let min = Math.max(...collectionData.map(item => item.floorPrice))
    //     values.sort((one, two) => (one > two ? -1 : 1));
    //     while(list.length <= 3) {
    //         let min = Math.min(...collectionData.map(item => item.floorPrice))
    //         let result = collectionData.filter(item => item.floorPrice === min)
    //         list.filter(item => min != item.floorPrice)
    //         return list
    //     }
  }

  console.log(getFeatured());

  return (
    <div style={rootStyle}>
      <div style={contentContainer}>
        <div style={startPageWelcomeText}>
          <h2 style={startPageHeadline}>
            Buy extreme NFTs and dont look back!
          </h2>
          <p style={headlineSubText}>
            Are you looking for insane NFTs? Do you want to make money Quick?
            You've come to the right place. NFT Heaven is the worlds latest and
            smallest NFT-website.
          </p>
          <div style={startPageLinkButtonContainer}>
            <Link style={linkButtonStyle} to="/productpage">
              <Button style={StyledButton} variant="contained" href="">
                Buy
              </Button>
            </Link>

            <Link style={linkButtonStyle} to="/searchresult">
              <Button style={StyledButton} variant="contained" href="">
                Search for NFT
              </Button>
            </Link>

            <SearchButton />
          </div>
        </div>
        <div style={flexProducts}>
          {collectionList.map((name, index) => (
            <ProductCard collection={false} key={index} card={name} />
          ))}
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
  justifyContent: "space-around",
  marginTop: "10rem",
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
  background: "rgb(32, 129, 226)",
  margin: "1rem",
  fontSize: "2rem",
};
