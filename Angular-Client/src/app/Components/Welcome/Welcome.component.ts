import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Welcome',
  templateUrl: './Welcome.component.html',
  styleUrls: ['./Welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public lat: number = 0;
  public long: number
  public interval: any;
  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  private startTimer(): void {
    this.interval = setInterval(() => {
      this.getLocation();
    }, 1000);
  }
  private getLocation(): void {
    if ('geolocation' in navigator) {
      let watchID = navigator.geolocation.watchPosition((position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      });
    } else {
      console.log('Location no available');
    }
  }

}
