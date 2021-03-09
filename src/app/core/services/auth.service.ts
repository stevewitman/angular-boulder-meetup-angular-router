import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { map, shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const AUTH_DATA = 'auth_data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subject = new BehaviorSubject<User>(null);

  user$: Observable<User> = this.subject.asObservable();

  isSignedIn$: Observable<boolean>;
  isSignedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isSignedIn$ = this.user$.pipe(map((user) => !!user));

    this.isSignedOut$ = this.isSignedIn$.pipe(map((signedIn) => !signedIn));

    const user = localStorage.getItem(AUTH_DATA);

    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }

  signin(email: string, password: string): Observable<User> {
    return this.http
      .post<User>('/api/signin', { email, password })
      .pipe(
        tap((user) => {
          this.subject.next(user);
          localStorage.setItem(AUTH_DATA, JSON.stringify(user));
        }),
        shareReplay()
      );
  }

  signout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
  }
}
