import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

const USERS_API_URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(USERS_API_URL);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${USERS_API_URL}/${id}`);
  }

  update(user: User): Observable<void> {
    return this.http.put<void>(`${USERS_API_URL}/${user.id}`, user);
  }
}
