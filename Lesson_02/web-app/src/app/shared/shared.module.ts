import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RatingModule} from 'primeng/rating';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    RatingModule,
    ConfirmDialogModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    RatingModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService],
})
export class SharedModule { }
