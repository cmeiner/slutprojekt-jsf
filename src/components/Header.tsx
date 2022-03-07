import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { color, width } from "@mui/system";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { link } from "fs";


function Header () {
 return (
    <div style={rootStyle}>
        <div style={innerHeader}>
            <Link style={headline} to="/"><h1 style={headline}>NFT Heaven</h1></Link>
            
            <div>🖼</div>
            <Link style={headerCartLink} to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
        </div>
    </div>
 )
}


const rootStyle: CSSProperties = {
    background: "#374B4A", 
    color: '#eee',
}

const innerHeader: CSSProperties = {
    width: "100%",
    height: "10vh",
    display: "flex",
    margin: "0 auto",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1250px"
}

const headline: CSSProperties = {
    marginLeft: "1rem",
    textDecoration: "none",
    color: "white",
}

const headerCartLink: CSSProperties = {
    color: "white",
    fontSize: "2.5rem",
    paddingRight: "1.5rem",
}

export default Header;