import {Component} from "@angular/core";
import {PostsService} from "./posts.service";
import {PostModel} from "../shared/models/post.model";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent {

  posts$: Observable<PostModel[]> = of([]);

  constructor(
    private readonly postsService: PostsService
  ) {
    this.posts$ = this.postsService.getAllPosts().pipe(
      delay(1500)
    );
  }

  onSelectPost(post: PostModel) {
    console.log(post.userExists());
  }
}
