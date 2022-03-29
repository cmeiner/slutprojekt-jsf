import { CSSProperties } from "react";
import { useProducts } from "../components/context/ProductContext";
import ItemCard from "../components/ItemCard";

function CollectionPage() {
  const { collections } = useProducts();
  console.log(collections);
  return (
    <div>
      <h1 style={collectionsTitle}>Here are all the available collections:</h1>
      <div style={flexProducts}>
        {collections.map((collection, index) => (
          <ItemCard key={index} collectionCard={collection} />
        ))}
      </div>
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

const collectionsTitle: CSSProperties = {
  textAlign: "center",
};

export default CollectionPage;
