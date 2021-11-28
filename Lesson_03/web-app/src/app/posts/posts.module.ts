import {NgModule} from "@angular/core";
import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    PostsService
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
