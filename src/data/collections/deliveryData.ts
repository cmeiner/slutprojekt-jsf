export interface DeliveryDataInfo {
  firstName: string;
  lastName: string;
  email: string;
  deliveryMethod: string;
  number: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
}

export const DeliveryDataInfoObject: DeliveryDataInfo = {
  firstName: "",
  lastName: "",
  email: "",
  deliveryMethod: "",
  number: 12,
  address: "",
  zipCode: 12,
  city: "",
  country: "",
};
