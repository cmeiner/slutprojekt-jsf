import { useProducts } from "../components/context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove, faAdd } from "@fortawesome/free-solid-svg-icons";
import { padding } from "@mui/system";
import { count } from "console";
import AddNewCollection from "../components/admin/addNewCollection";
import AddNewNFT from "../components/admin/addNewNFT";
import EditNFT from "../components/admin/editNFT";
import { CSSProperties } from "react";
import { Button } from "@mui/material";

function AdminPage() {
  const { collections, removeCollection, removeNft, addNft, addCollection } =
    useProducts();
  let testNFT = {
    NFTid: 34,
    image: "testimg",
    price: 12,
    description: "walla test",
    count: 1,
    collectionID: 1,
  };

  return (
    <div style={adminPageLayout}>
      {/* <h1>LÄGG TILL YTTLIGARE KOLLEKTION</h1>
            <AddNewCollection />
            <h2>Bög</h2>
            <AddNewNFT />
            <h2>Tutte</h2> */}
      {/* <EditNFT /> */}
      {collections.map((collection, index) => (
        <div style={adminCollections} key={index}>
          {" "}
          {/* DETTA ÄR COLLECTION DIVEN */}
          <div style={adminCollectionsHeader}>
            <h1>{collection.name}</h1>
            <p>Innehåller {collection.NFTS.length} NFTS</p>
            <Button
              onClick={() => addNft(testNFT /**/, collection.id)}
              style={buttonStyle}
              variant="contained"
              href=""
            >
              Add NFT
            </Button>
          </div>
          <div style={adminCollectionMain}>
            {collection.NFTS.map((nft, index /* DETTA ÄR NFTERNA */) => (
              <div style={adminAddStyle} key={index}>
                {nft.price}
                <img style={adminImageStyle} alt="" srcSet={nft.image} />
                {nft.description}
                <FontAwesomeIcon
                  icon={faRemove}
                  onClick={() => removeNft(collection.id, nft.NFTid)}
                />
              </div>
            ))}
          </div>
          <div style={adminCollectionFooter}>
            <Button
              onClick={() => removeCollection(collection.id)}
              style={buttonStyle}
              variant="contained"
              href=""
            >
              Remove
            </Button>
            <Button
              onClick={() => removeCollection(collection.id)}
              style={buttonStyle}
              variant="contained"
              href=""
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminPage;

const adminPageLayout: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
};

const adminCollections: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  border: ".15rem black solid",
  borderRadius: ".5rem",
  width: "100%",
  padding: "0 1rem 1rem 1rem",
  gap: "1rem",
};

const adminCollectionsHeader: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
};

const adminAddStyle: CSSProperties = {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  flexDirection: "column",
  border: ".25rem black solid",
  boxShadow: "2px 4px 12px #0049A9",
  borderRadius: ".5rem",
  width: "15%",
  padding: "1rem",
  textAlign: 'center'
};

const adminImageStyle: CSSProperties = {
  width: "5rem",
};

const adminCollectionMain: CSSProperties = {
  display: "flex",
  gap: "1rem",
};

const adminCollectionFooter: CSSProperties = {
  display: "flex",
  gap: "1rem",
};

const buttonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "#89CFF0",
  color: "white",
  fontSize: "small",
  width: "10rem",
};
