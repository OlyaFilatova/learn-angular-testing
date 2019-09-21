import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Result } from './result.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {

  readonly resultsUrl = 'api/results';

  constructor(private http: HttpClient) { }

  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.resultsUrl) as Observable<Result[]>;
  }

}
