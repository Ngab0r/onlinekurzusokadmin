import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(payment: Payment): void {
    this.router.navigate(['/', 'payment', 'edit', payment._id]);
  }
}
