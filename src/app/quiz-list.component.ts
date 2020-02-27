import { QuestionService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',

})
export class QuizListComponent implements OnInit{
  quizzes;

  constructor(private api: QuestionService) {

  }
  ngOnInit(): void {
    this.api.getQuizzes().subscribe(result => this.quizzes = result);
  }
}
