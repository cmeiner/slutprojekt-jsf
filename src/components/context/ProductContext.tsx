import { createContext, FC, useContext, useState } from "react";
import { NftItem, collectionDataItem, collectionData } from "../../data/collections/collection";


interface ProductContext {
    collections: collectionDataItem[],
    addProduct: (collection : collectionDataItem) => void,
    removeProduct: (collection : collectionDataItem) => void,
    editProduct: (collection : collectionDataItem) => void
}




const ProductsContext = createContext<ProductContext>({
    collections: [],
    addProduct: (collection : collectionDataItem) => {},
    removeProduct: (collection : collectionDataItem) => {},
    editProduct: (collection : collectionDataItem) => {},
})


export const ProductProvider: FC = (props) => {
    const [collections, setCollections] = useState(collectionData);

    const addProduct = () => {

    }

    const removeProduct = () => {

    }

    const editProduct = () => {

    }

    return (
        <ProductsContext.Provider value={{ collections, addProduct, removeProduct, editProduct }}>
            {props.children}
        </ProductsContext.Provider>
        
    );
};

export const useProducts = () => useContext(ProductsContext)

