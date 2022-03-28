import { CSSProperties } from "react";
import { collectionData } from "../data/collections/collection";
import { useProducts } from "./context/ProductContext";


function CollectionDescription() {
    const { collections } = useProducts()
    return <div style={{display: "flex", justifyContent: "center"}}>
        <div style={CollectionDescriptionContainer}>
            <h2>{collections.}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dolorem consectetur eius, molestias corporis quidem fugiat odit incidunt cumque tenetur! Dicta, quia sunt tempora qui neque laboriosam labore debitis? Repellat.</p>
        </div>
    </div>
}

export default CollectionDescription

const CollectionDescriptionContainer: CSSProperties = {
display: "flex",
justifyContent: "center",
width: "50%",
}