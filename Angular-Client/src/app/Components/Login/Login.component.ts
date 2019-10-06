import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginPassword: string;
  public loginUser: string;
  constructor(private curUser: UserService) { }

  ngOnInit() {
  }

}
