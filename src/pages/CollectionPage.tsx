import { CSSProperties, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/card";
import { collectionData } from "../data/collections/collection";



function CollectionPage() {
 // Använder ID från routern (:id) lägger det i en variabel
  const {id} = useParams()

  // Hämtar hem den orgienlla listan för sedan kunna leta igenom den
  const [collectionList, setCollectionList] = useState(collectionData);

  // Letar i colllection listan efter id som matchar URL routerns ID och sedan sätter det objectet till "Collection"
  const [collection, setCollection] = useState(collectionList.find(p => p.id.toString() === id));

  // Sedar passar vi in "nft" då i varje productCard som är NFTSEN :)


  useEffect(() => {
    console.log(collection)
  }, [])

  return (
    <div style={flexProducts}>
      {collection?.NFTS.map((nft, index) => (
        <ProductCard collection={true} key={index} card={collection} />
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
