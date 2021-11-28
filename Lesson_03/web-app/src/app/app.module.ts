import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_SETTINGS_TOKEN} from "./shared/models/app-settings.model";
import {environment} from "../environments/environment";
import {ApiServicesModule} from "./api/api-services.module";
import {PostsModule} from "./posts/posts.module";
import {UsersModule} from "./users/users.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiServicesModule,
    PostsModule,
    UsersModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: APP_SETTINGS_TOKEN,
      useValue: environment
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
