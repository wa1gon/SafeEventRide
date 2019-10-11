import { SignalrService } from 'src/app/services/SignalR/signalr.service';
import { LocationDTO } from './../../DTO/LocationDTO';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {
  private location: LocationDTO;
  public curLocation$: Subject<LocationDTO> = new Subject<LocationDTO>();
  private count = 0;
  private interval: any;
  constructor(private sigR: SignalrService) {
    // this.getLocation();
    this.interval = setInterval(() => {
      this.getLocation();
    }, 5000);

  }

  public getLocation(): void {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(`in geo watch: ${this.count}`);
        this.count++;
        this.location = new LocationDTO();
        this.location.lat = position.coords.latitude;
        this.location.long = position.coords.longitude;
        this.location.locDTG = new Date();
        this.curLocation$.next(this.location);
        this.sigR.sendLocation(this.location);
      }, (err) => {
        console.warn(`Error(${err.code}): ${err.message}`);
      }, options);
    } else {
      console.log('Location no available');
    }
  }
}
