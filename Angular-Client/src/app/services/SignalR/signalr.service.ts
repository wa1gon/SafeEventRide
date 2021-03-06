import { UserService } from 'src/app/services/user-service/user.service';
import { Router, RouterLink } from '@angular/router';
import { LocationDTO } from '../../DTO/LocationDTO';
import { UserDTO } from './../../DTO/userDTO';
import { Injectable } from '@angular/core';

import * as signalR from '@microsoft/signalr';
import { LoginStatusDTO } from 'src/app/DTO/loginStatusDTO';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private connection: any;
  private loginStatus: LoginStatusDTO;
  private sessionId: string;

  constructor(private router: Router, private userSvr: UserService) {
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('http://localhost:3773/ride')
      .withAutomaticReconnect()
      .build();

    this.connection.start().then(() => {
      console.log('Connected!');
    }).catch((err) => {
      return console.error(err.toString());
    });

    this.connection.on('BroadcastMessage', this.broadcastMessage);
    this.connection.on('LoginResponse', this.loginResponse);
  }

  private loginResponse = (status: LoginStatusDTO) => {
    if (status.status.toUpperCase() === 'OK') {
      this.loginStatus = status;
      this.userSvr.isLoggedIn = true;
      this.router.navigate(['/home']);
    }
    console.log(status);
  }
  private broadcastMessage = (type: string, payload: string) => {
    console.log(`type: ${type} - payload: ${payload}`);
  }
  public login(user: UserDTO): void {
    console.log('login rider');
    this.connection.invoke('LoginInRider', user).catch((err) => {
      return console.error(err.toString);
    });
  }

  public sendLocation(loc: LocationDTO): void {
    console.log('sending location');
    loc.sessionId = this.loginStatus.sessionId;
    this.connection.invoke('Location', loc).catch((err) => {
      return console.error(err.toString);
    });
  }

}
