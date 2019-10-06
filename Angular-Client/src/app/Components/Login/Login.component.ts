import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { UserDTO } from 'src/app/DTO/userDTO';
import { SignalrService } from 'src/app/services/SignalR/signalr.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginPassword: string;
  public loginUser: string;
  public loginGroup: FormGroup;
  constructor(private curUser: UserService, private sigR: SignalrService, private fb: FormBuilder) {
    this.loginGroup = this.buildForm();
  }

  ngOnInit() {
  }
  public loginClick(): void {
    console.log('in login event');
    const user = new UserDTO();
    Object.assign(user, this.loginGroup.value);
    user.userType = 'r';
    this.sigR.login(user);
  }
  private buildForm(): FormGroup {
    const loginGroup = this.fb.group({
      userId: ['1111'],
      password: ['2222'],
      phone: ['603-801-1114'],
      eventId: ['tdc2020']
    });
    return loginGroup;
  }

}
