import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/model/payment';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.paymentColumns;
  list$: Observable<Payment[]> = this.paymentService.getAll();

  constructor(
    private config: ConfigService,
    private paymentService: PaymentService,
  ) { }

  ngOnInit(): void {
  }

}
