import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Azariel Technologies';
  location: Location;
  url: String;
  home: String;
  constructor(location: Location) {
    this.location = location;
    this.url = location.path();
  }
}
