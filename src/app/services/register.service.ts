import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  registerUser(user: User) {
    return this.http.post(
      `${this.serverUrl}/users`,
      user
    ).pipe(
      catchError(error => {
        return of(error);
      })
    )
  }
}
