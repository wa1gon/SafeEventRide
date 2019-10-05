import { UserDTO } from './DTO/userDTO';
import { Location } from './DTO/Location';
import { SignalrService } from './services/SignalR/signalr.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  constructor(private sigR: SignalrService) { }

  ngOnInit(): void {
    // this.sigR.login('73');
    // const connection = new signalR.HubConnectionBuilder()
    //   .configureLogging(signalR.LogLevel.Information)
    //   .withUrl('http://localhost:3773/notify')
    //   .build();

    // connection.start().then(() => {
    //   console.log('Connected!');
    // }).catch((err) => {
    //   return console.error(err.toString());
    // });

    // connection.on('BroadcastMessage', (type: string, payload: string) => {
    //   console.log(`type: ${type} - payload: ${payload}`);
    //   this.messageService.add({ severity: type, summary: payload, detail: 'Via SignalR' });
    // });
  }
  login() {
    console.log('in login event');
    const user = new UserDTO();
    user.UserId = '73';
    user.UserType = 'r';
    user.EventId = 'Bentonville2020';
    user.Phone = '603-801-1114';
    this.sigR.login(user);
  }
  public sendLoc(): void {
    const loc = new Location();
    loc.Lat = 38.533;
    loc.Long = -93.3883;
    loc.LocDTG = new Date();
    this.sigR.sendLocation(loc);
  }
}
