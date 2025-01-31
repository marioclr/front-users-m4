import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
      id: 1,
      name: 'Mario',
      lastname: 'Lima',
      email: 'mario@clr.com',
      username: 'marioclr',
      password: '123456'
    },
    {
      id: 2,
      name: 'Joey',
      lastname: 'Ramone',
      email: 'joey@clr.com',
      username: 'joeyramone',
      password: '123456'
    }
  ];

  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
