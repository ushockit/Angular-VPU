import {AddressModel} from "./address.model";
import {CompanyModel} from "./company.model";

export interface UserInterface {
  id: number;
  name: string;
  phone: string;
  webSite: string;
  username: string;
  email: string;
  address: AddressModel;
  company: CompanyModel;
}

export interface UserModel extends UserInterface {}

export class UserModel {
  isKiev() {
    return this.address.city === 'Kiev';
  }
}
