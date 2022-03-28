import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

interface headerProps {
  searchBarFocused?: any;
  searchBarFocusOut?: any;
  modalState : boolean
  setModalState : any
}

function Header(headerProps: any) {
  const [searchFocused, setSearchFocused] = useState(false);

  const openModal = () => headerProps.setModalState(true)

  useEffect(() => {
    setSearchFocused(headerProps.searchBarFocused);
  }, [headerProps.searchBarFocused]);

  return (
    <div style={rootStyle}>
      <div style={innerHeader}>
        <div style={headerDiv1}>
          <Link style={headline} to="/">
            <h1 style={headline}>NFT Heaven</h1>
          </Link>
        </div>
        <div style={headerDiv2}> 
            <Link style={{textDecoration: "none"}} to="/CollectionPage">
              <Button style={StyledButton} variant="contained" href="">
                EXPLORE
              </Button>
            </Link>
        </div>
        <div style={headerDiv3}>
          <Button style={headerCartLink} onClick={openModal}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </div>
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  background: "#002f6b",
  color: "#eee",
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
  fontSize: '5vmin'
};

const headerCartLink: CSSProperties = {
  color: "white",
  fontSize: '5vmin'
};

const headerDiv1: CSSProperties = {
  width: '33%',
}
const headerDiv2: CSSProperties = {
  width: '33%',
  display: 'flex',
  justifyContent: 'center'
}
const headerDiv3: CSSProperties = {
  width: '33%',
  display: 'flex',
  justifyContent: 'flex-end'
}
const StyledButton: CSSProperties = {
  background: "#00214c",
  margin: "1rem",
  fontSize: "3vmin",
  fontWeight: "bold",
};

export default Header;
