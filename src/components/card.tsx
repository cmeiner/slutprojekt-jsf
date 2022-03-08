import { collectionData, collectionDataItem } from "../data/collections/collection"


interface cardInfo {
    card: {
        name: string,
        floorPrice: number,
        volumeTraded: number
        productImage: string
    }
}

function ProductCard(props : cardInfo) {

    const name = props.card.name
    const floorPrice = props.card.floorPrice
    const volumeTraded = props.card.volumeTraded
    const productImage = props.card.productImage

    // {collectionData.map((collectionDataItem))}

    return(
        <div>
            <h1>NAME {props.card.name}</h1>
            <h1>FLOOR PRICE {props.card.floorPrice}</h1>

        </div>
    )
}

export default ProductCard