import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {
  state: any = {};
  curretIndexQuestion = 0;
  question: any = {};
  progress = 0;
  constructor(
    private location: Location,
    private stateService: StateService,
    private router: Router
  ) {
    this.state = this.stateService.levels[0].game;
    this.question = this.state.questions[this.curretIndexQuestion];
  }

  ngOnInit() { }

  irAReflexion() { this.router.navigate(['/reflexion-1']); }

  reset() {
    this.state = this.stateService.levels[0].game;
    this.question = this.state.questions[this.curretIndexQuestion];
    this.state = {};
    this.curretIndexQuestion = 0;
    this.question = {};
    this.progress = 0;
  }

  back() { this.location.back(); }

  select(response) {
    if (this.question.response === response) {
      console.log(this.question.response, 'correct response:', response);
      console.log(this.curretIndexQuestion);
      if (this.curretIndexQuestion === 2) {
        this.progress = this.progress + 1;
        setTimeout(() => this.irAReflexion(), 1500);
        console.log('fin');
      } else {
        this.curretIndexQuestion = this.curretIndexQuestion + 1;
        this.question = {};
        this.question = this.state.questions[this.curretIndexQuestion];
        this.progress = this.progress + 1;
      }
    }
  }

}
