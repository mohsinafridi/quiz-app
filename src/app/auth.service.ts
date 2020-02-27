import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Subscriber } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders();
    this.headers.append('contentType', 'application/json');
  }
  private selectedQuesition = new Subject<any>();
  questionSelected = this.selectedQuesition.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();
  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  register(credential) {
    return this.http.post(`https://localhost:44319/api/account/`,
     credential, { headers: this.headers })
      .subscribe(res => {
        debugger;
        this.authenticate(res);
      });
  }

  login(credential) {
    return this.http.post<any>(`https://localhost:44319/api/account/Login`, credential)
      .subscribe(res => {
        this.authenticate(res);
      });
  }
  authenticate(res) {
    localStorage.setItem('token', res.token);

    this.router.navigate(['/']);
  }

  logout(credential) {
    localStorage.removeItem('token');
  }


}

