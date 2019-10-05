import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public userName: string;
  public password: string;

  public isLoggedIn = false;

  constructor() { }
}



