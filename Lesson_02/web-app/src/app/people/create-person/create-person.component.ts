import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
} from "@angular/core";
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

interface CreatePersonModel {
  email: string;
  password: string;
}

@Component({
  selector: 'create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent {
  personModel: CreatePersonModel = {
    email: '',
    password: ''
  };

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
      phones: new FormArray([]),
      score: new FormControl(3, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.form.value);
    const { email, password, phones } = this.form.value;

    console.log('email: ', email);
    console.log('password: ', password);
    console.log('phones: ', phones);

    // сброс состояния формы
    // this.form.reset({
    //   // email: 'Default'
    // });

    // обновление значения формы без инициирования события об изменении
    // this.form.patchValue({ email: 'new value' }, { emitEvent: false });
  }
  onAddPhone() {
    this.phonesControls.push(new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]));
  }

  get emailControl(): AbstractControl {
    return this.form.controls.email;
  }

  get phonesControls(): FormArray {
    return this.form.controls.phones as FormArray;
  }
}
