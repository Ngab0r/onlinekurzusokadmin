import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examsheet } from '../model/examsheet';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ExamsheetService extends BaseService<Examsheet> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'examsheets';
  }

  getAll(): Observable<Examsheet[]> {
    return this.http.get<Examsheet[]>(`${this.config.apiUrl}${this.entity}`)
    // return this.http.get<Examsheet[]>(`${this.config.apiUrl}${this.entity}?_expand=user`)
  }
}
