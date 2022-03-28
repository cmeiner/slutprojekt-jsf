import { collectionData } from "../data/collections/collection";
import { useProducts } from "./context/ProductContext";


function CollectionDescription() {
    const { collections } = useProducts()
    return <div>
        <div>
            <h2>Fis</h2>
        </div>
    </div>
}

export default CollectionDescription