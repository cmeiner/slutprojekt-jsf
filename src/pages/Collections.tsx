import { CSSProperties, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { collectionData, NftItem } from "../data/collections/collection";

function Collections() {
  // Använder ID från routern (:id) lägger det i en variabel
  const { id } = useParams();

  // Hämtar hem den orgienlla listan för sedan kunna leta igenom den
  const [collectionList, setCollectionList] = useState(collectionData);

  // Letar i colllection listan efter id som matchar URL routerns ID och sedan sätter det objectet till "Collection"
  const [collection, setCollection] = useState(
    collectionList.find((p) => p.id.toString() === id)
  );

  const [nft, setNFT] = useState(collection?.NFTS);

  // Sedar passar vi in "nft" då i varje productCard som är NFTSEN :)

  useEffect(() => {
  }, []);

  return (
    <div style={flexProducts}>
      {nft?.map((nftItem, index) => (
        <ItemCard key={index} nftCard={nftItem} nftHeader={collection?.header} collectionName={collection?.name}/>
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

export default Collections;
