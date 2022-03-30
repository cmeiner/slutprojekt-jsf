import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useCart } from "./context/CartContext";
import { text } from "@fortawesome/fontawesome-svg-core";

interface headerProps {
  searchBarFocused?: any;
  searchBarFocusOut?: any;
  modalState: boolean;
  setModalState: any;
}

function Header(headerProps: any) {
  const { cart } = useCart();

  const openModal = () => headerProps.setModalState(true);

  return (
    <div style={rootStyle}>
      <div style={innerHeader}>
        <div style={headerDiv1}>
          <Link style={headline} to="/">
            <h1 style={headline}>NFT Heaven</h1>
          </Link>
        </div>
        <div style={headerDiv2}>
          <Link style={{ textDecoration: "none" }} to="/CollectionPage">
            <Button style={StyledButton} variant="contained" href="">
              EXPLORE
            </Button>
          </Link>
        </div>
        <div style={headerDiv3}>
          <Button style={headerCartLink} onClick={openModal}> 
          {cart.reduce((sum, nft) => sum + nft.count, 0) !== 0 && (
          <div style={itemCountBadge}>
            <p style={{textAlign: 'center', width: '100%', letterSpacing: 0, fontWeight: 'bold'}}>{cart.reduce((sum, nft) => sum + nft.count, 0)}</p>
          </div>
              )}
            <FontAwesomeIcon icon={faShoppingCart}/>
          </Button>
        </div>
      </div>
    </div>
  );
}


const rootStyle: CSSProperties = {
  background: "#04111d",
  color: "#eee",
  position: 'sticky',
  top: 0,
  zIndex: '101'
};

const innerHeader: CSSProperties = {
  width: "90%",
  height: "10vh",
  display: "flex",
  margin: "0 auto",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1250px",
};

const headline: CSSProperties = {
  textDecoration: "none",
  color: "white",
  fontSize: "5vmin",
};

const headerCartLink: CSSProperties = {
  color: "white",
  position: 'relative',
  fontSize: "5vmin",
};

const headerDiv1: CSSProperties = {
  width: "33%",
};
const headerDiv2: CSSProperties = {
  width: "33%",
  display: "flex",
  justifyContent: "center",
};
const headerDiv3: CSSProperties = {
  width: '33%',
  display: 'flex',
  justifyContent: 'flex-end',
}

const StyledButton: CSSProperties = {
  background: "#2081e2",
  margin: "1rem",
  fontSize: "3vmin",
  fontWeight: "bold",
};

const itemCountBadge: CSSProperties = {
  position:'absolute',
  top: '-.5rem',
  right: '-.5rem',
  width: '3vmin',
  height: '3vmin',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  fontSize: '1.5vmin',
  color: 'white',
  background: '#2081e2'
};

export default Header;
