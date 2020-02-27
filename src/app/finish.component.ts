import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  template: `<h1>Your Score</h1>
              <h2>{{data.correct}}/{{data.total}}</h2>
  `

})
export class FinishComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {

  }

}
