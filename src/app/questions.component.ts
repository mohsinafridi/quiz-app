import { QuestionService } from './api.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions.component.html',

})
export class QuestionsComponent {
  question: {};
  questions;
  quizId;
  constructor(private api: QuestionService,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(this.quizId).subscribe(result => this.questions = result);
  }
}
