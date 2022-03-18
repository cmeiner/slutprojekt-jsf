import Swish from "./paymentOptions/swish";
import { DeliveryDataInfo } from "../data/collections/deliveryData";

interface paymentOption {
  paymentOption: string;
  deliveryInfo: DeliveryDataInfo;
}

function PaymentBox(props: paymentOption) {
  return (
    <div>
      {props.paymentOption === "swish" && (
        <div>
          <Swish />
        </div>
      )}
    </div>
  );
}

export default PaymentBox;
