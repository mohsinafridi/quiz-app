import { Component } from '@angular/core';
import { QuestionService } from './api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',

})
export class QuizComponent {
  quiz= {};
  constructor(private api: QuestionService) {

  }

  ngOnInit() {
    // this.api.questionSelected.subscribe(q => this.question = q);
  }
  post() {
    this.api.postQuiz(this.quiz);
  }
}
