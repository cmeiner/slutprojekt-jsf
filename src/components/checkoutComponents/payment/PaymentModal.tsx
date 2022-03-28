import { CSSProperties } from "react";

function PaymentPopup() {
  return (
    <div>
      <div style={paymentPopUp}>
        <h2 style={{ color: "black" }}>Taking your money, hang on...</h2>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%" }}
            src="/assets/images/Icons/loading2.gif"
            alt="Tar dina pengar"
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
  background: "#C0D6DF",
  border: "2px solid #000",
  borderRadius: "2rem",
  zIndex: "9001",
  //   boxShadow: 24,
  textAlign: "center",
};
