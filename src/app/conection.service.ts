import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  url = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(this.url + 'auth/test')
    .pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
      return throwError(() => error.error.message || 'No conection');
  }

}
