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
  number: 1,
  address: "",
  zipCode: 1,
  city: "",
  country: "",
};

export interface InvoiceDataInfo {
  firstName: string;
  lastName: string;
  email: string;
  number: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
}

export const InvoiceDataInfoObject: InvoiceDataInfo = {
  firstName: "",
  lastName: "",
  email: "",
  number: 12,
  address: "",
  zipCode: 12,
  city: "",
  country: "",
};
