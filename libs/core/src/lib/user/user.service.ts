import {Injectable, signal} from '@angular/core';
import {User} from './user';

@Injectable({providedIn: 'root'})
export class UserService {
  user = signal<User | undefined>(undefined);
}
