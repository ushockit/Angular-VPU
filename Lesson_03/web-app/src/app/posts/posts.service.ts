import {Injectable} from "@angular/core";
import {JsonPlaceholderApiService} from "../api/jsonplaceholder/json-placeholder-api.service";
import {Observable} from "rxjs";
import {PostModel} from "../shared/models/post.model";
import {map, switchMap} from "rxjs/operators";
import {PostRawData} from "../api/jsonplaceholder/interfaces/post.interface";
import {UserRawData} from "../api/jsonplaceholder/interfaces/user.interface";
import {PostMapper} from "../shared/mappers/post.mapper";

@Injectable()
export class PostsService {
  constructor(
    private readonly jsonPlaceholderApiService: JsonPlaceholderApiService,
  ) {
  }

  getAllPosts(): Observable<PostModel[]> {
    return this.jsonPlaceholderApiService.getPosts().pipe(
      map((posts: PostRawData[]) => {
        return posts.map((post: PostRawData) => new PostMapper().mapData(post));
      })
    );
  }

  getPostById(postId: number): Observable<PostModel> {
    return this.jsonPlaceholderApiService.getPostById(postId).pipe(
      switchMap((post: PostRawData) => this.jsonPlaceholderApiService.getUserById(post.id).pipe(
        map((user: UserRawData) => ({ post, user }))
      )),
      map(({ post, user }) => new PostMapper().mapData(post, user))
    );
  }
}
