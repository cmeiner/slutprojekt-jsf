import { createContext, FC, useState } from "react";

interface ContextValue {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  updateProduct: (product: Product) => void;
}

interface Product {
  title: string;
  price: number;
}

const ProductContext = createContext<ContextValue>({
  products: [],
  addProduct: () => undefined,
  removeProduct: () => undefined,
  updateProduct: () => undefined,
});

const ProductProvider: FC = (props) => {
  const [products, setCart] = useState<Product[]>([]);

  const addProduct = (
    product: Product
  ) => {}; /* Logik för att lägga till i cart */
  const removeProduct = (
    id: number
  ) => {}; /* Logik för att ta bort från cart */
  const updateProduct = (
    product: Product
  ) => {}; /* Logik för att uppdatera produkt */

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, updateProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};