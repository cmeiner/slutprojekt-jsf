import { useState } from "react";
import ProductCard from "../components/card";
import { collectionData } from "../data/collections/collection";

function TestPage() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input
        placeholder="Enter Post Title"
        onChange={(event) => setQuery(event.target.value)}
      />

      {collectionData
        .filter((collection) => {
          if (query === "") {
            return collection;
          } else if (
            collection.name.toLowerCase().includes(query.toLowerCase())
          ) {
            return collection;
          }
        })
        .map((collection, index) => (
          <ProductCard collection={false} key={index} card={collection} />
        ))}
    </div>
  );
}

export default TestPage;
