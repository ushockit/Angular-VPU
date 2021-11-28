import {GeoModel} from "./geo.model";

export interface AddressInterface {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: GeoModel;
}


export interface AddressModel extends AddressInterface {}

export class AddressModel {}
