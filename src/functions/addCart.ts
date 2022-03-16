// @ts-ignore

export function addCart(item?: {}) {
  if (!localStorage.getItem("cart")) {
    let CartList = [item];
    localStorage.setItem("cart", JSON.stringify(CartList));
  } else {
    let CartList = JSON.parse(localStorage.getItem("cart")!);
    CartList.push(item);
    localStorage.setItem("cart", JSON.stringify(CartList));
  }
}

export default addCart;
