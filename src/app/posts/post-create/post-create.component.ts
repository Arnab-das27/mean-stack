import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {

  constructor(
    public apiPostsService:PostsService
  ){}


  onAddPost(form:NgForm){
    console.log("",form)
    if(form.invalid)
      {
        return;
      }
    // const post: Post = {
    //   id:0,
    //   title:form.value.title,
    //   content:form.value.content,
    // };
    
    this.apiPostsService.addPost(
      form.value.title,
      form.value.content
    )

  }

}
