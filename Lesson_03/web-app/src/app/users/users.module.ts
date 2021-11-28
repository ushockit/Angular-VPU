import {NgModule} from "@angular/core";
import {UsersService} from "./users.service";
import {UsersComponent} from "./users.component";

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
  ],
  providers: [
    UsersService
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
