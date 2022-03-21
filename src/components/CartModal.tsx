import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCoins, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Modal, Typography } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";
import { collectionData } from "../data/collections/collection";

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
  const handleClose = () => props.setModalState(false);
  const clearCart = () => localStorage.clear();
  const [collectionList, setCollectionList] = useState(collectionData);

  console.log(localList);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.modalState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your cart
            <div style={cartHeader}>
              <div style={nftIcon}></div>
              <div style={headerDesc}>
                <div>Product</div>
                <div>Quantity</div>
              </div>
              <div>Price</div>
            </div>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="div"
          >
            {localList?.map((item: any, index: number) => (
              <div style={nftContainer} key={index}>
                <div>
                  <img style={nftIcon} srcSet={item.image} alt="test" />
                </div>
                {/* VÄNSTER DIV */}
                <div style={nftMid}>
                  {/* MITTEN DIV */}
                  <div>
                    <div style={nftName}>
                      {collectionList.find((col) => col.id === item.collectionID)?.name} #{item.NFTid}
                    </div>
                    <div style={cartItemDesc}>{item.description}</div>
                  </div>
                  <div style={nftMidRight}>
                    <FontAwesomeIcon icon={faMinus} style={iconStyle}/>
                    {item.count}
                    <FontAwesomeIcon icon={faPlus} style={iconStyle}/>
                    </div>
                </div>
                {/* MITTEN DIV */}
                <div style={cartItemPrice}>
                <FontAwesomeIcon icon={faCoins} style={coinStyle}/>
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

const nftContainer: CSSProperties = {
  display: "flex",
  gap: '1rem'
};

const nftMid: CSSProperties = {
  width: "60%",
  display: "flex",
  flexDirection: "row",
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: "2rem",
};

const nftIcon: CSSProperties = {
  width: "6rem",
};

const cartItemDesc: CSSProperties = {
  fontSize: "1rem",
};

const cartItemPrice: CSSProperties = {
  fontSize: "3rem",
};

const nftName: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 'bold'
};

const cartHeader: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: '1rem'
};

const iconStyle: CSSProperties = {
  fontSize: 'x-small',
};

const coinStyle: CSSProperties = {
  fontSize: 'xx-large',
};


const nftMidRight: CSSProperties = {
  display: "flex",
  width: '25%',
};

const headerDesc: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "60%",
};

export default CartModal;
