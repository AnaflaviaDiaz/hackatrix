import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.scss']
})
export class LecturaComponent implements OnInit {
  public state: any;
  constructor(
    private location: Location,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private stateService: StateService) {
    console.log(this.activeRoute.snapshot);
    const route = this.activeRoute.snapshot.routeConfig.path;
    this.state = this.getData(route);
    console.log(this.state);
  }

  ngOnInit() {
  }

  getData(route) {
    switch (route) {
      case 'cuento-1':
        return this.stateService.levels[0].lectura;
      case 'cuento-2':
        return this.stateService.levels[1].lectura;
      case 'cuento-3':
        return this.stateService.levels[2].lectura;
    }
  }
  atras() {
    this.location.back();
  }
  goGame() {
    const route = this.activeRoute.snapshot.routeConfig.path;
    switch (route) {
      case 'cuento-1':
        this.router.navigate(['/faces']);
        return;
      case 'cuento-2':
        return;
      case 'cuento-3':
        return;
    }
  }
}
