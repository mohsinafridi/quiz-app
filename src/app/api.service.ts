import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('contentType', 'application/json');
  }

  private selectedQuesition = new Subject<any>();
  questionSelected = this.selectedQuesition.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  getQuestions(quizId) {
    return this.http.get(`https://localhost:44319/api/question/${quizId}`);
  }

  postQuestion(question) {
    return this.http.post('https://localhost:44319/api/question', question)
    .subscribe(res => console.log(res));
  }

  putQuestion(question) {
    return this.http.put(`https://localhost:44319/api/question/${question.id}`, question)
    .subscribe(res => console.log(res));
  }

  selectQuestion(question) {
    this.selectedQuesition.next(question);
  }
  /////////Quizzes/////
  getQuizzes() {
    return this.http.get('https://localhost:44319/api/quizzes');
  }
  getAllQuizzes() {
    return this.http.get('https://localhost:44319/api/quizzes/all');
  }

  postQuiz(quiz) {
    return this.http.post('https://localhost:44319/api/quizzes', quiz,
     { headers: this.headers }).subscribe();
  }

  putQuiz(quiz) {
    return this.http.put(`https://localhost:44319/api/quizzes/${quiz.id}`, quiz)
    .subscribe(res => console.log(res));
  }
  selectQuiz(question) {
    this.selectedQuiz.next(question);
  }

}

