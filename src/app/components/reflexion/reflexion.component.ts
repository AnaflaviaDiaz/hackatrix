import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/services/state.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reflexion',
  templateUrl: './reflexion.component.html',
  styleUrls: ['./reflexion.component.scss']
})
export class ReflexionComponent implements OnInit {
  public state: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private stateService: StateService,
    private location: Location) {
    console.log(this.activeRoute.snapshot);
    const route = this.activeRoute.snapshot.routeConfig.path;
    this.state = this.getData(route);
    console.log(this.state);
  }

  ngOnInit() { }

  back() {
    this.location.back();
  }

  getData(route) {
    switch (route) {
      case 'reflexion-1':
        return this.stateService.levels[0].reflexion;
      case 'reflexion-2':
        return this.stateService.levels[1].reflexion;
      case 'reflexion-3':
        return this.stateService.levels[2].reflexion;
    }
  }


}
