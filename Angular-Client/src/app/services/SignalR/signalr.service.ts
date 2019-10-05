import { Location } from './../../DTO/Location';
import { UserDTO } from './../../DTO/userDTO';
import { Injectable } from '@angular/core';

import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private connection: any;
  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('http://localhost:3773/ride')
      .build();

    this.connection.start().then(() => {
      console.log('Connected!');
    }).catch((err) => {
      return console.error(err.toString());
    });

    this.connection.on('BroadcastMessage', this.broadcastMessage);
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

  public sendLocation(loc: Location): void {
    console.log('sending location');
    this.connection.invoke('Location', loc).catch((err) => {
      return console.error(err.toString);
    });
  }

}
