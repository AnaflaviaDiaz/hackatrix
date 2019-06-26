import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-line',
  templateUrl: './game-line.component.html',
  styleUrls: ['./game-line.component.scss']
})
export class GameLineComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() { }

  navegar(idNivel) {
    this.router.navigate(['/cuento-' + idNivel]);
  }

}
