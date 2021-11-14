import {Component, Input, Output, EventEmitter} from "@angular/core";
import {UserInterface} from "../app.component";

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: UserInterface = {
    firstName: '',
    lastName: '',
    age: 0
  };
  @Output() userUpdateEvent = new EventEmitter<UserInterface>();


  onUpdateClick() {
    const newUser: UserInterface = {
      ...this.user,
      firstName: `New_${this.user.firstName}`,
      lastName: `New_${this.user.lastName}`,
    };

    this.userUpdateEvent.emit(newUser);
  }
}
