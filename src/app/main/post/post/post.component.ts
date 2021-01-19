import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService, Post } from '../../main.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute, private mainService: MainService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.post = this.mainService.getByid(+params.id);
    });
  }

}
