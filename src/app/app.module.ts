
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatExpansionModule,
  MatDialogModule,
  MatRadioModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//Components
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { QuizListComponent } from './quiz-list.component';
import { QuizComponent } from './quiz.component';
import { QuestionsComponent } from './questions.component';
import { QuestionComponent } from './question.component';
import { RegisterComponent } from './register.component';
import { NavComponent } from './nav.component';
import { LoginComponent } from './login.component';
import { PlayComponent } from './play.component';
import { PlayQuizComponent } from './playquiz.component';
import { FinishComponent } from './finish.component';
// Interceptor///
import { AuthInterceptor } from './auth.interceptor';
import { ErrorInterceptorProvider } from './error.interceptor';



const appRoutes: Routes = [
  { path: '', component: NavComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'play', component: PlayComponent },
  { path: 'play-quiz/:quizId', component: PlayQuizComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    QuestionsComponent,
    QuizComponent,
    QuizListComponent,
    RegisterComponent,
    NavComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [ErrorInterceptorProvider,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
],
  bootstrap: [AppComponent],
  entryComponents : [FinishComponent]
})
export class AppModule { }
