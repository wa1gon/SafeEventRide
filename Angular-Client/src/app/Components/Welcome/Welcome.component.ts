import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from 'src/app/services/GeoLocation/geo-location.service';

@Component({
  selector: 'app-Welcome',
  templateUrl: './Welcome.component.html',
  styleUrls: ['./Welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public interval: any;
  constructor(private geoLoc: GeoLocationService) { }

  ngOnInit() {
    this.geoLoc.getLocation();

  }
}
