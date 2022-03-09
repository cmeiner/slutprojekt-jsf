import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { style } from "@mui/system";
import { CSSProperties } from "react";
import {
  collectionData,
  collectionDataItem,
} from "../data/collections/collection";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface cardInfo {
  card: {
    name: string;
    floorPrice: number;
    volumeTraded: number;
    productImage: string;
  };
  collection: boolean;
}

function ProductCard(props: cardInfo) {
  const name = props.card.name;
  const floorPrice = props.card.floorPrice;
  const volumeTraded = props.card.volumeTraded;
  const productImageURL = props.card.productImage;

  return (
    <div>
      {!props.collection && (
        <div>
          <div style={cardContainer}>
            <h1> {name}</h1>
            <div style={cardPicture}>
              <img style={productImage} srcSet={productImageURL} alt="test" />
            </div>
            <h1 style={priceStyle}>
              FROM: <FontAwesomeIcon icon={faCoins} /> {floorPrice}
            </h1>
            <Link to="/CollectionPage">
              <Button style={buttonStyle} variant="contained" href="">
                VIEW COLLECTION
              </Button>
            </Link>
          </div>
        </div>
      )}
      {props.collection && (
        <div>
          <div style={cardContainer}></div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;

const cardContainer: CSSProperties = {
  width: "20rem",
  borderRadius: ".5rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "1rem",
  background: "#202225",
  boxShadow: "2px 5px 12px black",
};
const cardPicture: CSSProperties = {
  width: "18rem",
};

const productImage: CSSProperties = {
  width: "100%",
};

const priceStyle: CSSProperties = {
  fontSize: "1rem",
};

const buttonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "#2081e2",
};
