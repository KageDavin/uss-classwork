import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userProfile = new BehaviorSubject<User | null>(null);

  readonly userProfile$ = this._userProfile.asObservable();

  constructor() {}

  updateUserProfile(user: User) {
    this._userProfile.next(user);
  }

  clearUserProfile() {
    this._userProfile.next(null);
  }
}
