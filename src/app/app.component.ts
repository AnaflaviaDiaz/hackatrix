import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private location: Location
  ) { }
  route = ['cuento-1', 'faces', 'reflexion-1'];

  back() {
    this.location.back();
  }
}
