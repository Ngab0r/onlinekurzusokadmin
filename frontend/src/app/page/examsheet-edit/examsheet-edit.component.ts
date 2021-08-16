import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Examsheet } from 'src/app/model/examsheet';
import { ExamsheetService } from 'src/app/service/examsheet.service';

@Component({
  selector: 'app-examsheet-edit',
  templateUrl: './examsheet-edit.component.html',
  styleUrls: ['./examsheet-edit.component.scss']
})
export class ExamsheetEditComponent implements OnInit {

  examsheet$: Observable<Examsheet> = this.ar.params.pipe(
    switchMap(params => this.examsheetService.get(params.id))
  );
  examsheet: Examsheet = new Examsheet();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private examsheetService: ExamsheetService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.examsheet$.subscribe(
      examsheet => {
        this.examsheet = examsheet;
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
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.examsheet._id }),
      new InputField({
        key: 'name', label: 'Name', type: 'text', value: this.examsheet.name,
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required.'
      }),
      // new TextareaField({ key: 'questions', label: 'Questions.', value: this.examsheet.questions }),
      // new InputField({ key: 'price', label: 'Price', type: 'number', value: (this.examsheet.price as unknown as string) }),
    ];
  }

  onSave(examsheet: Examsheet): void {
    this.examsheetService.update(examsheet).subscribe(
      p => this.router.navigate(['/', 'examsheets'])
    );
  }

}
