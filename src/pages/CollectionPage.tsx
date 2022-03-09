import { CSSProperties, useState } from "react";
import ProductCard from "../components/card";
import { collectionData } from "../data/collections/collection";

function CollectionPage() {

  const [collectionList, setCollectionList] = useState(collectionData);
  return (
    <div style={flexProducts}>
          {collectionList.map((collection, index) => (
            <ProductCard collection={true} key={index} card={collection} />
          ))}
        </div>
  )
}

const flexProducts: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "space-around",
};

export default CollectionPage;
