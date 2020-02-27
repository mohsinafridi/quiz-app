import { Component, OnInit } from '@angular/core';
import { QuestionService } from './api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',

})
export class QuestionComponent implements OnInit {
  question = {};
  quizId;
  constructor(private api: QuestionService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.questionSelected.subscribe(q => this.question = q);
  }
  post() {
    this.question.quizId = this.quizId;
    this.api.postQuestion(this.question);
  }
}
