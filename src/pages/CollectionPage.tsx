import { CSSProperties, useState, useEffect } from "react";
import ItemCard from "../components/card";
import { collectionData } from "../data/collections/collection";

function CollectionPage() {
  const [collectionList1, setCollectionList1] = useState(collectionData);

  useEffect(() => {
    setCollectionList1(collectionData);
  }, []);

  console.log(collectionList1.length);

  return (
    <div style={flexProducts}>
      {collectionList1.map((collection, index) => (
        <ItemCard key={index} collectionCard={collection} />
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
