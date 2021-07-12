export interface ShippingAddress{
    firstName: string;
    lastName: string;
    addressLineOne: string;
    addressLineTwo?: string;
    state: string;
    postalCode: string;
    country: string;
    email: string;
    confirmEmail: string;
  }