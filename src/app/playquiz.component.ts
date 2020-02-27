import { FinishComponent } from './finish.component';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from './api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-play-quiz',
  templateUrl: './question.component.html',

})
export class PlayQuizComponent implements OnInit {
  questions;
  quizId;
  step = 0;
  constructor(private api: QuestionService, private route: ActivatedRoute, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(this.quizId)
      .subscribe(q => {
        this.questions = q;
        this.questions.forEach(q => {
          q.answers = [q.correctAnswer, q.asnwer1, q.asnwer2, q.asnwer3];
          shuffle(q.answers);

        });
      })
  }
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
  finished() {
    var correct = 0;
    this.questions.forEach(q => {
      if (q.correctAnswer === q.selectedAnswer) {
        correct++;
      }
    });
    const dialogRef = this.dialog.open(FinishComponent, {

      data: { correct, total: this.questions.length }
    });

  }

}
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

