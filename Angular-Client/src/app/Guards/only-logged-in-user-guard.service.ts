import { CanActivate, Router  } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from 'app/services/login/user-service.service';


@Injectable()
export class OnlyLoggedInUserGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router ) { }

  public canActivate() {
    if (this.userService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
