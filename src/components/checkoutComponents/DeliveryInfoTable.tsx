import { CSSProperties } from "react";
import { DeliveryDataInfo } from "../../data/collections/deliveryData";

interface Props {
  deliveryInfo: DeliveryDataInfo;
}

function DeliveryInfoTable(props: Props) {
  return (
    <div>
      <table style={{ gap: "1rem" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.firstName + " " + props.deliveryInfo.lastName}
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td style={{ paddingLeft: "1rem" }}>{props.deliveryInfo.email}</td>
          </tr>
          <tr>
            <td>Phone#</td>
            <td style={{ paddingLeft: "1rem" }}>{props.deliveryInfo.number}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.address}
            </td>
          </tr>
          <tr>
            <td>Zipcode</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.zipCode}
            </td>
          </tr>
          <tr>
            <td>City</td>
            <td style={{ paddingLeft: "1rem" }}>{props.deliveryInfo.city}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.country}
            </td>
          </tr>
          <tr>
            <td>Delivery</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.deliveryMethod}
            </td>
          </tr>
          <tr>
            <td>Payment method</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.paymentMethod}
            </td>
          </tr>
        </tbody>
      </table>

      {/* <div style={infoBox}>
        <p>
          Name -{" "}
          {props.deliveryInfo.firstName + " " + props.deliveryInfo.lastName}
        </p>
      </div>
      <div style={infoBox}>
        <p>Email - {props.deliveryInfo.email}</p>
      </div>
      <div style={infoBox}>
        <p>Phone number - {props.deliveryInfo.number}</p>
      </div>
      <div style={infoBox}>
        <p>Address - {props.deliveryInfo.address}</p>
      </div>
      <div style={infoBox}>
        <p>Zipcode - {props.deliveryInfo.zipCode}</p>
      </div>
      <div style={infoBox}>
        <p>City - {props.deliveryInfo.city}</p>
      </div>
      <div style={infoBox}>
        <p>Country - {props.deliveryInfo.country}</p>
      </div>
      <div style={infoBox}>
        <p>Delivery Method - {props.deliveryInfo.deliveryMethod}</p>
      </div> */}
    </div>
  );
}

export default DeliveryInfoTable;

const infoBox: CSSProperties = {
  border: "1px solid white",
};
