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
    this.sigR.login('73');
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
    this.sigR.login('73');
  }
}
