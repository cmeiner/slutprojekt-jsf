import { useProducts } from "../components/context/ProductContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit, faRemove, faAdd
} from "@fortawesome/free-solid-svg-icons";
import { padding } from "@mui/system";
import { count } from "console";
import AddNewCollection from "../components/admin/addNewCollection";

function AdminPage() {

    const { collections, removeCollection, removeNft, addNft, addCollection } = useProducts()
    let testNFT = {  
        NFTid: 34,
        image: "testimg",
        price: 12,
        description: "walla test",
        count: 1,
        collectionID: 1,
    }



    return (
        <div>
            <h1>LÄGG TILL YTTLIGARE KOLLEKTION</h1>
            <AddNewCollection />
            <FontAwesomeIcon  icon={faAdd}/>
            {collections.map((collection, index) => (
                
                <div key={index}> {/* DETTA ÄR COLLECTION DIVEN */}
                    <h1>{collection.name}</h1>
                    <p>Innehåller {collection.NFTS.length} nfter</p>
                    <FontAwesomeIcon  onClick={() => addNft(testNFT /**/ , collection.id)} icon={faAdd}/>
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