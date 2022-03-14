import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
import {
  collectionData,
  collectionDataItem,
  NftItem,
} from "../data/collections/collection";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
interface collectionInfo {
  card: {
    id: number;
    name: string;
    description: string;
    volumeTraded: number;
    floorPrice: number;
    header: string;
    productImage: string;
    NFTS: NftItem[];
  };
  collection: boolean;
  
}

interface nftInfo {
  card: {
    id: number;
    image: string;
    price: string;
    timeLeft: string;
    description: string;
  };
  collection: boolean;
  shoppingCart: NftItem[];
}


interface isCollection {
  checkState : boolean
}

function ProductCard(props: collectionInfo) {
// function ProductCard(setState : isCollection , collection? : collectionInfo, nft? : nftInfo) {
  let id = props.card.id
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
            <Link to={`/CollectionPage/${id}`}>
              <Button style={buttonStyle} variant="contained" href="">
                VIEW COLLECTION
              </Button>
            </Link>
          </div>
        </div>
      )}
      {props.collection && (
        <div>
          <div style={cardContainer}>
            <div style={cardHeader}>
              <img
                style={collectionImage}
                srcSet={productImageURL}
                alt="headerImg"
              />
              <div style={headerText}>
                <div style={nameStyle}>{name}</div>
                <div style={priceStyle}><FontAwesomeIcon icon={faCoins} />{floorPrice}</div>
              </div>
            </div>
            <div style={cardContent}>
            <img
                style={productImage}
                srcSet={productImageURL}
                alt="mainImg"
              />
              <Button style={buttonStyle} variant="contained" href="">
               BUY NOW
              </Button>
            </div>
          </div>
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

const cardHeader: CSSProperties = {
  width: '100%',
  display: "flex",
  flexDirection: "row",
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: '1rem'
};

const headerText: CSSProperties = {
  textAlign: 'center',
  fontSize: '1.5rem'
};

const collectionImage: CSSProperties = {
  width: "4rem",
  display: 'flex',
  alignItems: 'center'
};

const nameStyle: CSSProperties = {
};

const cardContent: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  padding: '.5rem'

};
