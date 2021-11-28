import {UserModel} from "./user.model";

export interface PostInterface {
  id: number;
  title: string;
  body: string;
  user?: UserModel;
}

export interface PostModel extends PostInterface {}

export class PostModel {
  userExists() {
    // return this.user !== undefined;
    return Boolean(this.user);
  }
}
