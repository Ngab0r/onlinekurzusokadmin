import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Payment } from 'src/app/model/payment';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.scss']
})
export class PaymentEditComponent implements OnInit {

  payment$: Observable<Payment> = this.ar.params.pipe(
    switchMap(params => this.paymentService.get(params.id))
  );
  payment: Payment = new Payment();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private paymentService: PaymentService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.payment$.subscribe(
      payment => {
        this.payment = payment;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {
    /*
    _id: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;
  */
    this.fields = [
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.payment._id }),
      // new InputField({
      //   key: 'name', label: 'Name', type: 'text', value: this.payment.name,
      //   validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required.'
      // }),
      // new TextareaField({ key: 'questions', label: 'Questions.', value: this.payment.questions }),
      new InputField({ key: 'money', label: 'Money', type: 'number', value: (this.payment.money as unknown as string) }),
    ];
  }

  onSave(payment: Payment): void {
    this.paymentService.update(payment).subscribe(
      p => this.router.navigate(['/', 'payments'])
    );
  }

}
