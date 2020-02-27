import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `<mat-toolbar>
      <button mat-button routerLink='/quiz'>My Quiz</button>
      <button mat-button routerLink='/play'>Play</button>
      <span style="flex:1 1 auto;"></span>
      <button  mat-button routerLink='/register'>Register</button>
      <button  mat-button *ngIf='!auth.isAuthenticated' routerLink='/login'>Login</button>
      <button  mat-button *ngIf='auth.isAuthenticated' (click)="auth.logout()">Logout</button>
</mat-toolbar>
  `

})
export class NavComponent {
  quiz = {};
  constructor(private auth: AuthService) {

  }
}
