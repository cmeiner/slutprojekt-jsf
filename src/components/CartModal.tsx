import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Modal, Typography } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";
import { collectionData } from "../data/collections/collection";



interface CartProps {
  modalState : boolean
  setModalState : any

}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function CartModal(props: CartProps) {
    const [localList, setLocalList] = useState(JSON.parse(localStorage.getItem('cart')!))
    const handleClose = () => props.setModalState(false);
    const clearCart = () => localStorage.clear()

      console.log(localList)

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
            Din kundvagn
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} component="div">
            {localList?.map((item : any, index : number) => (
                <div style={nftContainer} key={index}>
                  <div><img style={nftIcon} srcSet={item.image} alt="test" /></div> {/* VÄNSTER DIV */}
                  <div style={nftMid}> {/* MITTEN DIV */}
                    <div>{item.NFTid}</div>
                    <div></div>
                  </div> {/* MITTEN DIV */}
                  <div></div> {/* HÖGER DIV */}
                </div>
            ))}
            <button onClick={clearCart}>TÖM KUNDVAGN</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


export const nftContainer : CSSProperties = {
  display: "flex",
}


export const nftMid : CSSProperties = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  fontSize: 'xx-small'
}

export const nftIcon : CSSProperties = {
  width: "40px",
}

export default CartModal;
