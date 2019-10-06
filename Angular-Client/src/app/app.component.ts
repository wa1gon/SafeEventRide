
import { UserDTO } from './DTO/userDTO';
import { Location } from './DTO/Location';
import { SignalrService } from './services/SignalR/signalr.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from './services/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  constructor(private sigR: SignalrService, private userService: UserService) { }

  ngOnInit(): void {

  }
}
