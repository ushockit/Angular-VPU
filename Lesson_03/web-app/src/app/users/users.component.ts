import {Component} from "@angular/core";
import {UsersService} from "./users.service";
import {UserModel} from "../shared/models/user.model";
import {take} from "rxjs/operators";

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  constructor(
    private readonly usersService: UsersService
  ) {
    // usersService.getUserById(1)
    //   .pipe(
    //     take(1)
    //   )
    //   .subscribe((user: UserModel) => {
    //   console.log(user);
    // })
  }
}
