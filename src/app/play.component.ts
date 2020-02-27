import { QuestionService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play.component.html',

})
export class PlayComponent implements OnInit{
  quizzes;

  constructor(private api: QuestionService) {

  }
  ngOnInit(): void {
    this.api.getAllQuizzes().subscribe(result => this.quizzes = result);
  }
}
