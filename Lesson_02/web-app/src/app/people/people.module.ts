import { NgModule } from '@angular/core';
import {PeopleComponent} from "./people.component";
import {PersonComponent} from "./person/person.component";
import {CreatePersonComponent} from "./create-person/create-person.component";
import {BigFirstLetterPipe} from "../shared/pipes/big-first-letter.pipe";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent,
    CreatePersonComponent,
    BigFirstLetterPipe,
  ],
  imports: [
    SharedModule
    // FormsModule,
  ],
  exports: [PeopleComponent],
  providers: [],
})
export class PeopleModule { }
