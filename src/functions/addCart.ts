// @ts-ignore


interface testNft {
  NFTid: number;
  image: string;
  price: number;
  description: string;
}


export function addCart(item?: testNft) {
  if (!localStorage.getItem("cart")) {
    let CartList = [item];
    localStorage.setItem("cart", JSON.stringify(CartList));
  } else {
    let CartList = JSON.parse(localStorage.getItem("cart")!);
    let foundItem = CartList.find((listedItem : any) => listedItem.NFTid === item?.NFTid)
    if(foundItem) {
      foundItem.count += 1
      console.log('Finns redan')
    }else {

      CartList.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(CartList));
  }
}

export default addCart;
