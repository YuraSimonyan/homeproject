import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Post {
  img: any,
  title: string,
  text: string,
  id?: number
}
@Injectable({ providedIn: 'root' })
export class MainService {
  constructor(private http: HttpClient) { }
  submit(post: Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', post)
  }
  posts = [
    {
      img: "../../assets/images/telaviv.jpg",
      title: 'Tel Aviv',
      text: "Tel Aviv-Yafo often referred to as just Tel Aviv, is the most populous city in the Gush Dan metropolitan area of Israel. Located on the Israeli Mediterranean ",
      id: 1
    },
    {
      img: "../../assets/images/tallin.jpg",
      title: 'Tallin',
      text: "Tallinn is the capital, the most populous and primate city of Estonia. Located in the northern part of the country, on the shore of the Gulf of Finland of the Baltic",
      id: 2
    }
  ]
  getByid(id){
    return this.posts.find(p=>p.id===id);
  }
}