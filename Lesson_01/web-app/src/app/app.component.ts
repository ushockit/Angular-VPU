import { Component } from '@angular/core';

export interface UserInterface {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Intro to angular';
  date = new Date();
  value = 10.5;
  imageSrc = 'https://static.remove.bg/remove-bg-web/f50bd6ad4990ff621deccea155ab762c39d8c77a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png';
  classList = ['first', 'second'];

  btnStart = {
    isActive: true,
    activeStyle: 'on',
    disableStyle: 'off'
  };

  counter = 0;
  inputUsernameValue = 'Default value';

  user: UserInterface = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    age: 20
  };

  get formatDate() {
    return this.date.toLocaleString();
  }

  onActiveChange(ev: MouseEvent) {
    console.log(ev);
    this.btnStart.isActive = !this.btnStart.isActive;
  }

  up(increaseValue: number) {
    this.counter += increaseValue;
  }

  down(decreaseValue: number) {
    this.counter -= decreaseValue;
  }

  updateUser(user: UserInterface): void {
    console.log('Got - ', user);
  }
}
