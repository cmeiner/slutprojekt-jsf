import { useProducts } from "../components/context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove, faAdd, faCoins } from "@fortawesome/free-solid-svg-icons";
import { padding } from "@mui/system";
import { count } from "console";
import AddNewCollection from "../components/admin/addNewCollection";
import AddNewNFT from "../components/admin/addNewNFT";
import EditNFT from "../components/admin/editNFT";
import { CSSProperties } from "react";
import { autocompleteClasses, Button } from "@mui/material";
// import EditCollection from "../components/admin/editCollection";

function AdminPage() {
  const { collections, removeCollection, removeNft, addNft, addCollection, openAddNftModal, openEditNftModal } =
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
      <button onClick={() => localStorage.clear()}>ASD</button>
      <AddNewNFT />
      <EditNFT /> 
      {/* <h1>LÄGG TILL YTTLIGARE KOLLEKTION</h1>
            <AddNewCollection />
            <h2>Bög</h2>
            <AddNewNFT />
            <h2>Tutte</h2> */}
      {/* <EditNFT /> */}
      {/* <EditCollection />  */}
      {collections.map((collection, index) => (
        <div style={adminCollections} key={index}>
          {" "}
          {/* DETTA ÄR COLLECTION DIVEN */}
          <div style={adminCollectionsHeader}>
            <div style={headerLeft}>
            <h1>{collection.name}</h1>
            <p>Innehåller {collection.NFTS.length} NFTS</p>
            </div>
            <div style={headerRight}>
            <Button
              onClick={() => removeCollection(collection.id)}
              style={buttonStyle}
              variant="contained"
              href=""
            >
              Remove
            </Button>
            <Button
              // onClick={() => editCollection(collection.id)}
              style={buttonStyle}
              variant="contained"
              href=""
            >
              Edit
            </Button> 
            <Button
              onClick={() => openAddNftModal(collection.id)}
              style={buttonStyle}
              variant="contained"
              href=""
            >
              Add NFT
            </Button>
            </div>
          </div>
          <div style={adminCollectionMain}>
            {collection.NFTS.map((nft, index /* DETTA ÄR NFTERNA */) => (
              <div style={adminAddStyle} key={index}>
                <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                  <div>
                    <FontAwesomeIcon icon={faCoins} /> 
                  {nft.price}
                  </div>
                  <div>
                    ID 
                    #{nft.NFTid}

                  </div>

                </div>
                <img style={adminImageStyle} alt="" srcSet={nft.image} />
                {nft.description}
                <FontAwesomeIcon
                  icon={faRemove}
                  onClick={() => removeNft(collection.id, nft.NFTid)}
                style={removeButton}/>
                <Button
                onClick={() => openEditNftModal(nft.NFTid, collection.id)}
                style={editButtonStyle}
                variant="contained"
                href=""
                >
                Edit NFT
                </Button>
              </div>
            ))}
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
  gap: "2rem",
};

const adminCollections: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  boxShadow: "2px 4px 12px #0049A9",
  borderRadius: ".5rem",
  width: "100%",
  padding: "0 1rem 1rem 1rem",
  gap: "1rem",
};

const adminCollectionsHeader: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: 'space-around',
  gap: "1rem",
  width: '100%',
  flexWrap: 'wrap'
};

const adminAddStyle: CSSProperties = {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "2px 2px 8px #0049A9",
  borderRadius: ".5rem",
  background: "#002f6b",
  width: "10rem",
  padding: "1rem",
  textAlign: 'center',
  position: 'relative'
};

const adminImageStyle: CSSProperties = {
  width: "90%",
};

const adminCollectionMain: CSSProperties = {
  display: "flex",
  gap: "1rem",
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const headerLeft: CSSProperties = {
  display: "flex",
  gap: "1rem",
  alignItems: 'center'
};

const headerRight: CSSProperties = {
  display: "flex",
  gap: "1rem",
  flexWrap: 'wrap',
  justifyContent:'center'
};

const buttonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "#002f6b",
  color: "white",
  fontSize: "small",
  width: "10rem",
};

const editButtonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "#00214c",
  color: "white",
  fontSize: "small",
  width: "100%",
  marginTop: 'auto',
  justifySelf: 'flex-end'
};

const removeButton: CSSProperties = {
  position: 'absolute',
  right: '.6rem',
  top: '.6rem',
  fontSize: '1.3rem',
  cursor: 'pointer'
};
