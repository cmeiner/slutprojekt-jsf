import { CSSProperties } from "react";

function PaymentPopup() {
  return (
    <div>
      <div style={paymentPopUp}>
        <h2 style={{ color: "white" }}>Taking your money, hang on...</h2>
        <div style={{ width: "100%" }}>
          <img
            style={spinStyle}
            src="/assets/images/Icons/loading.svg"
            alt="Waiting for payment"
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentPopup;

const paymentPopUp: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  background: "#202225",
  border: "1px solid #303339",
  borderRadius: "1rem",
  zIndex: "9001",
  boxShadow: '24',
  textAlign: "center",
};

const spinStyle: CSSProperties = {
  width: '50%',
  fill: 'white'
}
