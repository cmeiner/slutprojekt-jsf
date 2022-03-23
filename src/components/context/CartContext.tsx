// @ts-ignore

import { createContext, FC, useContext, useState } from "react";
import { NftItem } from "../../data/collections/collection";

interface CartContext {
  cart: NftItem[];
  addProduct: (item?: NftItem) => void;
  incQty: (itemID: number) => void;
  decQty: (itemID: number) => void;
  clearCart: () => void;
  totalPrice: number;
}

export const CartContext = createContext<CartContext>({
  cart: [],
  addProduct: (item?: NftItem) => {},
  incQty: (itemID: number) => {},
  decQty: (itemID: number) => {},
  clearCart: () => {},
  totalPrice: 1,
});

export const CartProvider: FC = (props) => {
  let localData = localStorage.getItem('cart')
  const [cart, setCart] = useState<NftItem[]>(localData ? JSON.parse(localData) : []);
  const [totalPrice, setTotalPrice] = useState(cart.reduce((sum, nft) => sum + nft.price * nft.count, 0))

  const addProduct = (item?: NftItem) => {
    let NewProductList = cart;
    let foundItem = NewProductList.find(
      (listedItem: any) => listedItem.NFTid === item?.NFTid
    );
    if (foundItem) {
      foundItem.count += 1;
    } else {
      NewProductList.push(
        item || {
          NFTid: 12,
          image: "blabla",
          price: 12,
          description: "bla",
          count: 1,
          collectionID: 1,
        }
      );
    }
    setCart(NewProductList);
    setTotalPrice(cart.reduce((sum, nft) => sum + nft.price * nft.count, 0))
    localStorage.setItem('cart', JSON.stringify(NewProductList))
  };

  const incQty = (itemID: number) => {
    let updatedList = cart.map((item : any) => {
        if (item.NFTid === itemID) {
          item.count +=1;
        }
        return item;
    });
    setCart(updatedList)
    setTotalPrice(cart.reduce((sum, nft) => sum + nft.price * nft.count, 0))
    localStorage.setItem('cart', JSON.stringify(updatedList))
  };
  
  const decQty = (itemID: number) => {
    let updatedList = cart.filter((item: NftItem) => {
      if (item.NFTid === itemID) {
        if (item.count > 1) {
          item.count -= 1;
          return item;
        }
      } else {
        return item;
      }
    })!;
    setCart(updatedList)
    setTotalPrice(cart.reduce((sum, nft) => sum + nft.price * nft.count, 0))
    localStorage.setItem('cart', JSON.stringify(updatedList))
  };

  const clearCart = () => {
    setCart([])
    setTotalPrice(0)
    localStorage.setItem('cart', JSON.stringify([]))
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, incQty, decQty, clearCart, totalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
