import {
  Component,
  Input,
} from "@angular/core";
import {PersonInterface} from "../people.component";
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
})
export class PersonComponent {
  @Input() person: PersonInterface = {
    firstName: '',
    lastName: '',
    birth: new Date()
  };

  constructor(
    private readonly confirmService: ConfirmationService
  ) {
  }

  get firstName() {
    return this.person.firstName.toUpperCase();
  }

  onRemoveClick() {
    this.confirmService.confirm({
      message: 'Confirm?',
      accept: () => {
        console.log('Accept');
      },
      reject: () => {
        console.log('Cancel');
      }
    })
  }
}
