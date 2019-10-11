import { LocationDTO } from './../../DTO/LocationDTO';
import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from 'src/app/services/GeoLocation/geo-location.service';
import 'leaflet-routing-machine';
declare let L;
@Component({
  selector: 'app-Welcome',
  templateUrl: './Welcome.component.html',
  styleUrls: ['./Welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public interval: any;
  private map: any;
  constructor(private geoLoc: GeoLocationService) { }

  ngOnInit() {
    this.geoLoc.getLocation();
    this.geoLoc.curLocation$.subscribe(this.locationUpdate);

    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.Icon.Default.imagePath = '/assets/leaflet/images/';

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

  }
  private locationUpdate = (loc: LocationDTO): void => {
    this.map.setView([loc.lat, loc.long], 13);
    L.marker([loc.lat, loc.long]).addTo(this.map);
    console.log(loc);
  }
}
