import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.scss']
})
export class PostListsComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  posts:Post[]=[];
  private postsSub: Subscription = new Subscription;

  constructor(
    public apiPostsService:PostsService
  ){}

  ngOnInit(): void {
    this.apiPostsService.getPosts();
    this.postsSub = this.apiPostsService.getPostUpdateListener().subscribe((posts: Post[]) =>{
      this.posts = posts;
    })      
  }

  onDelete(postId:string):void{
    this.apiPostsService.deletePost(postId);
  }

  ngOnDestroy(): void {
      this.postsSub.unsubscribe();
  }
}