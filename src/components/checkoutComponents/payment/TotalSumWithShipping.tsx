import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeliveryDataInfo } from "../../../data/collections/deliveryData";
import { useCart } from "../../context/CartContext";

interface deliveryItem {
  deliveryInfo: DeliveryDataInfo;
  finalTotalSum: number;
  setFinalTotalSum: any;
}

function TotalSumWithShipping(props: deliveryItem) {
  const { totalPrice } = useCart();
  let totalSumWithShipping = 0;

  if (props.deliveryInfo.deliveryMethod === "DHL agent") {
    totalSumWithShipping = totalPrice + 2;
  } else if (props.deliveryInfo.deliveryMethod === "DHL express") {
    totalSumWithShipping = totalPrice + 6;
  } else if (props.deliveryInfo.deliveryMethod === "Postnord home delivery") {
    totalSumWithShipping = totalPrice + 4;
  }
  props.setFinalTotalSum(totalSumWithShipping);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ marginRight: ".1rem", fontSize: "1.2rem" }}>
          Total price with shipping: {totalSumWithShipping}
        </p>
        <FontAwesomeIcon icon={faCoins} />
      </div>
    </div>
  );
}

export default TotalSumWithShipping;
