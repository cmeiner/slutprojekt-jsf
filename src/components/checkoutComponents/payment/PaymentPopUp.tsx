import { CSSProperties } from "react";

function PaymentPopUp() {
  return (
    <div>
      <div style={paymentPopUp}>
        <h2>Taking your money, hang on...</h2>
      </div>
    </div>
  );
}

export default PaymentPopUp;

const paymentPopUp: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "44vw",
  height: "44vh",
  background: "grey",
  border: "2px solid #000",
  zIndex: "9001",
  //   boxShadow: 24,
  textAlign: "center",
};
