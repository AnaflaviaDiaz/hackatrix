import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-game',
  templateUrl: './init-game.component.html',
  styleUrls: ['./init-game.component.scss']
})
export class InitGameComponent implements OnInit {
  isLoading = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.handleLoading();
  }

  handleLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  navigate() {
    this.router.navigate(['/linea-de-juego']);
  }
}
