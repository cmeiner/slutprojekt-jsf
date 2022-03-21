import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Modal, Typography } from "@mui/material";
import { CSSProperties, useState } from "react";
import { collectionData } from "../data/collections/collection";
import ItemCard from "./ItemCard";
import { NftItem } from "../data/collections/collection";

interface CartProps {
  modalState: boolean;
  setModalState: any;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "44vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CartModal(props: CartProps) {
  const [localList, setLocalList] = useState(
    JSON.parse(localStorage.getItem("cart")!)
  );

  const incQty = (itemId: number) => {
    let item = localList.find((item : any) => item.NFTid === itemId)
    item.count += 1
    localStorage.setItem('cart', JSON.stringify(localList))
    console.log(item)
  };

  const decQty = (itemId: number) => {
    let item = localList.find((item : any) => item.NFTid === itemId)
    if (item.count < 1){
      localList.filter((item: any) => item.NFTid !== itemId)
      localStorage.setItem('cart', JSON.stringify(localList))
    } else
       item.count -= 1
       localStorage.setItem('cart', JSON.stringify(localList))
  };
  
  const handleClose = () => props.setModalState(false);
  const clearCart = () => localStorage.clear();
  const [collectionList, setCollectionList] = useState(collectionData);

  return (
    <div>
      <Modal
        open={props.modalState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Your cart
            <div style={cartHeader}>
              <div style={prodCol}>Product</div>
              <div style={qtyCol}>Quantity</div>
              <div style={priceCol}>Price</div>
            </div>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2}}
            component="div"
          >
            {localList?.map((item: any, index: number) => (
              <div style={nftContainer} key={index}>
                <div style={iconCol}>
                  <img style={iconStyle} srcSet={item.image} alt="test" />
                </div>
                    <div style={prodColMid}>
                      <div>
                      {collectionList.find((col) => col.id === item.collectionID)?.name} #{item.NFTid}
                      </div>
                    <div>{item.description}</div>
                    </div>
                  <div style={qtyCol}>
                      <FontAwesomeIcon icon={faMinus} style={iconStyle} onClick={() => decQty(item.NFTid)}/>
                    {item.count}
                      <FontAwesomeIcon icon={faPlus} style={iconStyle} onClick={() => incQty(item.NFTid)}/>
                  </div>
                <div style={priceCol}>
                  <FontAwesomeIcon icon={faCoins} />
                  {item.price}
                </div>
              </div>
            ))}
            <button onClick={clearCart}>EMPTY YOUR CART</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const cartHeader: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  width: '100%'
};

const iconCol: CSSProperties = {
  width: '10%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const prodCol: CSSProperties = {
  width: "70%"
};

const prodColMid: CSSProperties = {
  width: "60%",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const qtyCol: CSSProperties = {
  width: "15%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'

};

const priceCol: CSSProperties = {
  width: "15%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const priceStyle: CSSProperties = {

}

const nftContainer: CSSProperties = {
  display: "flex",
  flexDirection: 'row',
  gap: "1rem",
  width: '100%',
  margin: '.5rem 0'
};

const iconStyle: CSSProperties = {
  width: '100%',
  cursor: 'pointer',
};

export default CartModal;
