import { useProducts } from "../components/context/ProductContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit, faRemove, faAdd
} from "@fortawesome/free-solid-svg-icons";
import { padding } from "@mui/system";

function AdminPage() {

    const { collections, removeCollection, removeNft } = useProducts()



    return (
        <div>
            {collections.map((collection, index) => (
                <div key={index}> {/* DETTA ÄR COLLECTION DIVEN */}
                    <h1>{collection.name}</h1>
                    <p>Innehåller {collection.NFTS.length} nfter</p>
                    {collection.NFTS.map((nft, index) => ( /* DETTA ÄR NFTERNA */
                        <div key={index}>{nft.description}<FontAwesomeIcon  icon={faRemove} onClick={() => removeNft(collection.id, nft.NFTid)} /></div>
                    ))}
                    <FontAwesomeIcon icon={faEdit}  />
                    <FontAwesomeIcon icon={faRemove}  onClick={ () => removeCollection(collection.id) } />
                </div>
            ))}
        </div>
    )
}

export default AdminPage