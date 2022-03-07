import { Button } from "@mui/material"
import { CSSProperties } from "react"
import { Link } from "react-router-dom";

function StartPage (){
    return (
        <div style={rootStyle}>
            <div style={contentContainer}>
                <div style={startPageWelcomeText}> 
                    <h2>Buy extreme NFTs and dont look back!</h2> 
                    <p>Are you looking for insane NFTs? Do you want to make money Quick?</p>
                    
                    <Link style={linkButtonStyle} to="/productpage">
                        <Button style={StyledButton} variant="contained" href="">
                            KÖP!
                        </Button>
                    </Link>
                    
                    <Link style={linkButtonStyle} to="/searchresult">
                    <Button style={StyledButton} variant="contained" href="">
                        Sök efter NFT
                    </Button>
                    </Link> 
                </div>
                
            </div>
        </div>
    )

}

export default StartPage

const rootStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    width: "100%",
    border: "2px solid #88D9E6",
}

const startPageWelcomeText: CSSProperties = {
    marginLeft:"2rem",
}

const contentContainer: CSSProperties = {
    display: "flex",
    justifyContent: "center",
}

const StyledButton: CSSProperties = {
    backgroundColor: "#8B8BAE",
    margin: "1rem",
}

const linkButtonStyle: CSSProperties = {
    textDecoration: "none",
}