import {Injectable} from "@angular/core";
import {JsonPlaceholderApiService} from "../api/jsonplaceholder/json-placeholder-api.service";
import {Observable} from "rxjs";
import {UserModel} from "../shared/models/user.model";
import {map} from "rxjs/operators";
import {UserRawData} from "../api/jsonplaceholder/interfaces/user.interface";
import {UserMapper} from "../shared/mappers/user.mapper";


@Injectable()
export class UsersService {
  constructor(
    private readonly jsonPlaceholderApiService: JsonPlaceholderApiService,
  ) {
  }

  getUserById(userId: number): Observable<UserModel> {
    return this.jsonPlaceholderApiService.getUserById(userId).pipe(
      map((userRaw: UserRawData) => new UserMapper().mapData(userRaw))
    );
  }
}
