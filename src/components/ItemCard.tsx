import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
import { NftItem } from "../data/collections/collection";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import addCart from "../functions/addCart";

interface cardInfo {
  nftCard?: {
    NFTid: number;
    image: string;
    price: number;
    description: string;
  };
  collectionCard?: {
    id: number;
    name: string;
    description: string;
    volumeTraded: number;
    floorPrice: number;
    header: string;
    productImage: string;
    NFTS: NftItem[];
  };
  nftHeader? : string;
  collectionName? : string;
  setCart : any
  cartState : any
}

function ItemCard(props: cardInfo) {
 
  const nftInfo = {
    id: props.nftCard?.NFTid,
    buyPrice: props.nftCard?.price,
    image: props.nftCard?.image,
    headerImage: props.nftHeader,
    collectionName: props.collectionName, 
    description: props.nftCard?.description,
  };

  const collectionInfo = {
    id: props.collectionCard?.id,
    name: props.collectionCard?.name,
    floorPrice: props.collectionCard?.floorPrice,
    volumeTraded: props.collectionCard?.volumeTraded,
    productImageURL: props.collectionCard?.productImage,
  };

  return (
    <div>
      {props.collectionCard && (
        <div>
          <div style={cardContainer}>
            <h1> {collectionInfo.name}</h1>
            <div style={cardPicture}>
              <img
                style={productImage}
                srcSet={collectionInfo.productImageURL}
                alt="test"
              />
            </div>
            <h1 style={priceStyle}>
              FROM: <FontAwesomeIcon icon={faCoins} style={{paddingLeft: '4rem', paddingRight: '.3rem'}}/>
              {collectionInfo.floorPrice}
            </h1>
            <Link to={`/Collections/${collectionInfo.id}`}>
              <Button style={buttonStyle} variant="contained" href="">
                VIEW COLLECTION
              </Button>
            </Link>
          </div>
        </div>
      )}
      {props.nftCard && (
        <div>
          <div style={cardContainer}>
            <div style={cardHeader}>
              <img
                style={collectionImage}
                srcSet={nftInfo.headerImage}
                alt="headerImg"
              />
              <div style={headerText}>
                <div style={nameStyle}>{nftInfo.collectionName} #{nftInfo.id}</div>
                <div style={priceStyle}>
                  Price: 
                  <FontAwesomeIcon icon={faCoins} style={{paddingLeft: '4rem', paddingRight: '.3rem'}}/>
                  {nftInfo.buyPrice}
                </div>
              </div>
            </div>
            <div style={cardContent}>
              <img style={productImage} srcSet={nftInfo.image} alt="mainImg" />
                <div style={descStyle}>
                  {nftInfo.description}
                </div>
              <Button
                style={buttonStyle}
                variant="contained"
                onClick={() => addCart(props.setCart, props.cartState, props.nftCard)}
              >
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemCard;

const cardContainer: CSSProperties = {
  width: "20rem",
  borderRadius: ".5rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "1rem",
  background: "#002f6b",
  boxShadow: "2px 4px 12px #0049A9",
};
const cardPicture: CSSProperties = {
  width: "18rem",
};

const productImage: CSSProperties = {
  width: "100%",
};

const priceStyle: CSSProperties = {
  fontSize: "1rem",
  display: 'flex',
  justifyContent: 'space-around'
};

const buttonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "#00214c",
  color: 'white'
};

const cardHeader: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "1rem",
};

const headerText: CSSProperties = {
  textAlign: "center",
  fontSize: "1.5rem",
};

const collectionImage: CSSProperties = {
  width: "4rem",
  display: "flex",
  alignItems: "center",
};

const nameStyle: CSSProperties = {};

const descStyle: CSSProperties = {
  fontSize: '.8rem',
  display: 'flex', 
  justifyContent: 'center',
  textTransform: 'uppercase',
  fontWeight: 'bold'
};

const cardContent: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",
  padding: ".5rem",
};
