import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

interface headerProps {
  searchBarFocused?: any;
  searchBarFocusOut?: any;
}

function Header(headerProps: any) {
  const [searchFocused, setSearchFocused] = useState(false);

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
          <SearchBar
            isFocused={searchFocused}
            focusOut={headerProps.searchBarFocusOut}
          />
        </div>
        <div style={headerDiv3}>
          <Link style={headerCartLink} to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  background: "#374B4A",
  color: "#eee",
};

const innerHeader: CSSProperties = {
  width: "100%",
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
};

const headerCartLink: CSSProperties = {
  color: "white",
  fontSize: "2.5rem",
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

export default Header;
