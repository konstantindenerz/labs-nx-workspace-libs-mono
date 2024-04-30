import { Injectable, inject } from '@angular/core';
import {User, UserService} from '@labs/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userService = inject(UserService);
  login(){
    const user= {} as User;
    this.userService.user.set(user);
  }
}
