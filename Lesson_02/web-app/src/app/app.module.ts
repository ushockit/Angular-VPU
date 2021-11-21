import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoComponent} from "./demo/demo.component";
import {TextHoverDirective} from "./shared/directives/text-hover.directive";
import {NgxMaskModule} from "ngx-mask";
import {PeopleModule} from "./people/people.module";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TextHoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
