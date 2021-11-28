import {UserRawData} from "../../api/jsonplaceholder/interfaces/user.interface";
import {UserModel} from "../models/user.model";

export class UserMapper {
  mapData(userRaw: UserRawData): UserModel {
    return Object.assign(new UserModel(), {
      id: userRaw.id,
      name: userRaw.name,
      phone: userRaw.phone,
      webSite: userRaw.website,
      username: userRaw.username,
      email: userRaw.email,
      company: {
        name: userRaw.company.name,
        catchPhrase: userRaw.company.catchPhrase,
        bs: userRaw.company.bs
      },
      address: {
        street: userRaw.address.street,
        suite: userRaw.address.suite,
        city: userRaw.address.city,
        zipCode: userRaw.address.zipcode,
        geo: {
          latitude: Number(userRaw.address.geo.lat),
          longitude: Number(userRaw.address.geo.lng)
        }
      }
    });
  }
}
