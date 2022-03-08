import { Button, Card } from "@mui/material"
import { CSSProperties, useState } from "react"
import { Link } from "react-router-dom";
import ProductCard from "../components/card";
import { collectionData } from "../data/collections/collection";

function StartPage (){

    const [collectionList, setCollectionList] = useState(collectionData)
    const [featuredList, setFeaturedList] = useState([{}])


    function getFeatured() {
        // CollectionList får vi ut alla kollektioner
        // Filtrera så dem mest med FLOOR PRICE & BEST VOLUME TRADED
        // TOP 3 AV DEM SÄTTS IN I NYA FEATUREDLIST
        let list = collectionList


        list.sort(function compareFn(firstEl, secondEl)

        //let min = Math.max(...collectionData.map(item => item.floorPrice))
        // values.sort((one, two) => (one > two ? -1 : 1));

        // while(list.length <= 3) {
        //     let min = Math.min(...collectionData.map(item => item.floorPrice))
        //     let result = collectionData.filter(item => item.floorPrice === min)

        //     list.filter(item => min != item.floorPrice)
        //     return list
        // }


    }

    console.log(getFeatured())


    return (
        <div style={rootStyle}>
            <div style={contentContainer}>
                <div style={startPageWelcomeText}> 
                    <h2>Buy extreme NFTs and dont look back!</h2> 
                    <p>Are you looking for insane NFTs? Do you want to make money Quick?</p>
                    
                    <Link style={linkButtonStyle} to="/productpage">
                        <Button style={StyledButton} variant="contained" href="">
                            Buy
                        </Button>
                    </Link>
                    
                    <Link style={linkButtonStyle} to="/searchresult">
                    <Button style={StyledButton} variant="contained" href="">
                        Search for NFT
                    </Button>
                    </Link> 
                    {collectionList.map((collection, index) => (
                        <ProductCard key={index} card={collection} />
                    ))}
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
    // border: "2px solid #88D9E6",
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