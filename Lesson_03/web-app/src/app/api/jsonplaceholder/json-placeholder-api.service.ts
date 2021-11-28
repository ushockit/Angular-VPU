import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PostRawData} from "./interfaces/post.interface";
import {APP_SETTINGS_TOKEN, AppSettings} from "../../shared/models/app-settings.model";
import {Observable} from "rxjs";
import {UserRawData} from "./interfaces/user.interface";

@Injectable()
export class JsonPlaceholderApiService {
  constructor(
    @Inject(APP_SETTINGS_TOKEN) private readonly appSettings: AppSettings,
    private readonly http: HttpClient
  ) {}

  getPosts(): Observable<PostRawData[]> {
    return this.http.get<PostRawData[]>(
      [
        this.appSettings.apiUrl,
        'posts'
      ].join('/')
    )
  }

  getUsers(): Observable<UserRawData[]> {
    return this.http.get<UserRawData[]>(
      [
        this.appSettings.apiUrl,
        'users'
      ].join('/')
    );
  }

  getPostById(id: number): Observable<PostRawData> {
    return this.http.get<PostRawData>(
      [
        this.appSettings.apiUrl,
        'posts',
        id
      ].join('/')
    );
  }

  getUserById(userId: number): Observable<UserRawData> {
    return this.http.get<UserRawData>(
      [
        this.appSettings.apiUrl,
        'users',
        userId
      ].join('/')
    );
  }
}
