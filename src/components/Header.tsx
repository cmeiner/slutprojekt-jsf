import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { link } from "fs";
// import { SearchBar } from "./TestSearch";
import SearchBar from "./Searchbar";
=======
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
>>>>>>> bd4385c1e7b59c2efe88cbf1bbdbd909317786f1

  return (
    <div style={rootStyle}>
      <div style={innerHeader}>
        <div>
          <Link style={headline} to="/">
            <h1 style={headline}>NFT Heaven</h1>
          </Link>
        </div>
        <div>
          <SearchBar
            isFocused={searchFocused}
            focusOut={headerProps.searchBarFocusOut}
          />
        </div>
        <div>
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

export default Header;
