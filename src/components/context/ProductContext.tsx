import { createContext, FC, useContext, useState } from "react";
import { NftItem, collectionDataItem, collectionData } from "../../data/collections/collection";


interface ProductContext {
    collections: collectionDataItem[],
    addCollection: (collection : collectionDataItem) => void,
    removeCollection: (collectionID : number) => void,
    editCollection: (collection : collectionDataItem) => void
    addNft: (nft : NftItem, collectionID : number) => void,
    removeNft: (collectionID : number, nftID : number) => void,
    editNft: (nft : NftItem, collectionID? : number) => void,
    selectedCollectionID: number,
    selectedCollection: {}, 
    selectedNftID: number,
    selectedNft: {},
    addNftModal: boolean,
    openAddNftModal: (collectionID : number) => void,
    closeAddNftModal: () => void,
    editNftModal: boolean,
    openEditNftModal: (nftID: number, collectionID : number) => void,
    closeEditNftModal: () => void, 
}




const ProductsContext = createContext<ProductContext>({
    collections: [],
    addCollection: (collection : collectionDataItem) => {},
    removeCollection: (collectionID : number) => {},
    editCollection: (collection : collectionDataItem) => {},
    addNft: (nft : NftItem, collectionID : number) => {},
    removeNft: (collectionID : number, nftID : number) => {},
    editNft: (nft : NftItem, collectionID? : number) => {},
    selectedCollectionID: 0,
    selectedNftID: 0,
    addNftModal: false,
    openAddNftModal: (collectionID : number) => {},
    closeAddNftModal: () => {},
    editNftModal: false, 
    openEditNftModal: (nftID: number, collectionID : number) => {},
    closeEditNftModal: () => {},
    selectedCollection: {}, 
    selectedNft: {},

})

export const ProductProvider: FC = (props) => {
    let localData = localStorage.getItem('collections');
    const [addNftModal, setAddNftModal] = useState(false);
    const [editNftModal, setEditNftModal] = useState(false);
    const [collections, setCollections] = useState(localData ? JSON.parse(localData) : collectionData);
    const [selectedCollectionID, setSelectedCollectionID] = useState(0);
    const [selectedNftID, setSelectedNftID] = useState(0);
    const [selectedCollection, setSelectedCollection] = useState<collectionDataItem>();
    const [selectedNft, setSelectedNft] = useState<NftItem>();

    const openAddNftModal = (collectionID : number) => {setAddNftModal(true); setSelectedCollectionID(collectionID);}
    const closeAddNftModal = () => {setAddNftModal(false)}

    const openEditNftModal = (nftID : number, collectionID : number) => {
        setSelectedCollection(collections.find((collectionItem : collectionDataItem) => collectionItem.id === collectionID));
        let nft = selectedCollection?.NFTS.find((nftItem : NftItem) => nftItem.NFTid === nftID);
        setSelectedNft(nft);
    }
    const closeEditNftModal = () => {setEditNftModal(false)}


    const addCollection = (collection : collectionDataItem) => {
        collection.id = collections.length + 1
        let updatedList = [...collections, collection]
        setCollections(updatedList)
        localStorage.setItem('collections', JSON.stringify(updatedList))
    }

    const removeCollection = (collectionID : number) => {
        let updatedList = collections.filter((item : any) => item.id !== collectionID)
        setCollections(updatedList)
        localStorage.setItem('collections', JSON.stringify(updatedList))
    }

    const editCollection = () => {
        // id: number;
        // name: string;
        // description: string;
        // volumeTraded: number;
        // floorPrice: number; 
        // header: string; // HUR SKA VI SKÖTA UPPLADDNING AV BILDER ?
        // productImage: string; // HUR SKA VI SKÖTA UPPLADDNING AV BILDER ?
        // NFTS: NftItem[]; GÖTA EN EMPTY ARRAY I BÖRJAN
    }

    const editNft = (nft : NftItem, collectionID?: number) => {
        let updatedList = collections.map((collection : collectionDataItem) => {
            if (collection.id === collectionID) {
                collection.NFTS.map((nftItem : NftItem) => {
                    if(nftItem.NFTid === nft.NFTid) {
                        nftItem = nft
                        return nftItem
                    }
                    console.log(nftItem)
                    return nftItem
                })
            }
            return collection
        });
        setCollections(updatedList)
        localStorage.setItem('collections', JSON.stringify(updatedList))
    }
    const addNft = (nft : NftItem, collectionID : number) => {
        let updatedList = collections.map((collection : collectionDataItem) => {
            if (collection.id === collectionID) {
                nft.collectionID = collectionID
                collection.NFTS = [...collection.NFTS, nft]
                console.log(collection.NFTS)
            }
            return collection
        });
        setCollections(updatedList)
        localStorage.setItem('collections', JSON.stringify(updatedList))
    }
    const removeNft = (collectionID : number, nftID : number) => {
        let updatedList = collections.map((collection : collectionDataItem) => {
            if (collection.id === collectionID) {
                collection.NFTS = collection.NFTS.filter((nft : NftItem) => nft.NFTid !== nftID)
            }
            return collection
        });
        setCollections(updatedList)
    }

    return (
        <ProductsContext.Provider value={{ collections, addCollection, removeCollection, editCollection, addNft, editNft, removeNft, addNftModal, closeAddNftModal, openAddNftModal, editNftModal, openEditNftModal, closeEditNftModal, selectedCollectionID, selectedNftID, selectedCollection }}>
            {props.children}
        </ProductsContext.Provider>
        
    );
};

export const useProducts = () => useContext(ProductsContext)
