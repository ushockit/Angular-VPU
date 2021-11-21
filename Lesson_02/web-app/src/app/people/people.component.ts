import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
} from "@angular/core";

export interface PersonInterface {
  firstName: string;
  lastName: string;
  birth: Date;
}

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
})
export class PeopleComponent {
  people: PersonInterface[] = [
    {
      firstName: 'vasya',
      lastName: 'pupkin',
      birth: new Date(2000, 10, 10)
    }
  ];
}
