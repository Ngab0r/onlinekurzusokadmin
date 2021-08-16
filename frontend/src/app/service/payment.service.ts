import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends BaseService<Payment> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'payments';
  }

  getAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.config.apiUrl}${this.entity}`)
    // return this.http.get<Payment[]>(`${this.config.apiUrl}${this.entity}?_expand=user`)
  }
}
