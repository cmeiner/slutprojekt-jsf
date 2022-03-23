import { createContext, FC, useContext, useState } from "react";
import { object } from "yup";
import { NftItem, collectionDataItem, collectionData } from "../../data/collections/collection";


interface ProductContext {
    collections: collectionDataItem[],
    addCollection: (collection : collectionDataItem) => void,
    removeCollection: (collectionID : number) => void,
    editCollection: (collection : collectionDataItem) => void
    addNft: (collection : collectionDataItem) => void,
    removeNft: (collectionID : number, nftID : number) => void,
    editNft: (collection : collectionDataItem) => void
}




const ProductsContext = createContext<ProductContext>({
    collections: [],
    addCollection: (collection : collectionDataItem) => {},
    removeCollection: (collectionID : number) => {},
    editCollection: (collection : collectionDataItem) => {},
    addNft: (collection : collectionDataItem) => {},
    removeNft: (collectionID : number, nftID : number) => {},
    editNft: (collection : collectionDataItem) => {},
})


export const ProductProvider: FC = (props) => {
    let localData = localStorage.getItem('collections')
    const [collections, setCollections] = useState(localData ? JSON.parse(localData) : collectionData);

    const addCollection = () => {
        // id: number;
        // name: string;
        // description: string;
        // volumeTraded: number;
        // floorPrice: number; 
        // header: string; // HUR SKA VI SKÖTA UPPLADDNING AV BILDER ?
        // productImage: string; // HUR SKA VI SKÖTA UPPLADDNING AV BILDER ?
        // NFTS: NftItem[]; GÖTA EN EMPTY ARRAY I BÖRJAN
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

    const editNft = () => {
        // NFTid: number; 
        // image: string;
        // price: number;
        // description: string;
        // count: number;
        // collectionID: number DETTA BEHÖVS NOG EJ OM VI KOLLAR VILKEN KOLLEKTION MAN ÄR INNE OCH REDIGERAR
    }
    const addNft = () => {
        // NFTid: number; 
        // image: string;
        // price: number;
        // description: string;
        // count: number;
        // collectionID: number DETTA BEHÖVS NOG EJ OM VI KOLLAR VILKEN KOLLEKTION MAN ÄR INNE OCH REDIGERAR
    }
    const removeNft = (collectionID : number, nftID : number) => {
        let updatedList = collections.map((collection : collectionDataItem) => {
            if (collection.id === collectionID) {
                collection.NFTS = collection.NFTS.filter((nft : NftItem) => nft.NFTid !== nftID)
            }
            return collection
        });

          setCollections(updatedList)
        // let itemIndex = collections.findIndex((collection : any) => collection.id === collectionID)

        // let updatedList = collections[itemIndex].NFTS.filter((nft : any) => nft.NFTid !== nftID)

        // let newList = collections
        // newList[itemIndex].NFTS = [...updatedList]


        // setCollections(newList) // hihihdsds

    }

    return (
        <ProductsContext.Provider value={{ collections, addCollection, removeCollection, editCollection, addNft, editNft, removeNft }}>
            {props.children}
        </ProductsContext.Provider>
        
    );
};

export const useProducts = () => useContext(ProductsContext)

