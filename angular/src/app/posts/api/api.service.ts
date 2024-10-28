import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/v1/posts`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/posts`, post);
  }
}
