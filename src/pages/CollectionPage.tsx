import { CSSProperties, useState } from "react";
import ProductCard from "../components/card";
import { collectionData } from "../data/collections/collection";

function CollectionPage() {
  const [collectionList, setCollectionList] = useState(collectionData);


  // collectionData.find(collection.id === 1)
  // findCollection.nft.map()

  return (
    <div style={flexProducts}>
      {collectionList.map((collection, index) => (
        <ProductCard collection={false} key={index} card={collection} />
      ))}
    </div>
  );
}

const flexProducts: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "space-around",
  margin: "5rem 0",
};

export default CollectionPage;
