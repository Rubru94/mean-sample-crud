import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';
import { JsonPipe, NgFor } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  posts: any;

  postForm: FormGroup;

  constructor(private apiService: ApiService) {
    this.posts = [];
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      published: new FormControl(true),
    });
  }

  refreshPostList(): void {
    this.apiService.getPosts().subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error: any) => {
        console.error('An error occurred:', error);
      }
    );
  }

  ngOnInit() {
    this.refreshPostList();
  }

  onSubmit() {
    this.apiService.createPost(this.postForm.getRawValue()).subscribe(
      () => {
        this.refreshPostList();
      },
      (error: any) => {
        console.error('An error occurred:', error);
      }
    );
  }
}
