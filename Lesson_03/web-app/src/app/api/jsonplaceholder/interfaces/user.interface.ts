import {AddressRawData} from "./address.interface";
import {CompanyRawData} from "./company.interface";

export interface UserRawData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressRawData;
  phone: string;
  website: string;
  company: CompanyRawData;
}
