export interface AddressRawData {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: number; lng: number }
}
