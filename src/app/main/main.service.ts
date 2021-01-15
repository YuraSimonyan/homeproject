import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Post {
  img: any,
  title: string,
  text: string,
  id?: number
}
@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {

  }
  submit(post: Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', post)
    // .pipe(delay(1500)).subscribe(observer => {
    //   console.log(observer);
    //   this.posts.unshift(posteForm);
    //   console.log(this.posts)
    //   this.show = true;
    //   this.loading = false
    // })
  }
}