import {PostRawData} from "../../api/jsonplaceholder/interfaces/post.interface";
import {PostModel} from "../models/post.model";
import {UserRawData} from "../../api/jsonplaceholder/interfaces/user.interface";
import {UserMapper} from "./user.mapper";

export class PostMapper {
  mapData(raw: PostRawData, userRaw?: UserRawData): PostModel {
    return Object.assign(new PostModel(), {
      id: raw.id,
      title: raw.title,
      body: raw.body,
      ...(userRaw ? { user: new UserMapper().mapData(userRaw) } : {})
    });
  }
}
