import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Question } from 'src/app/model/question';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {

  question$: Observable<Question> = this.ar.params.pipe(
    switchMap(params => this.questionService.get(params.id))
  );
  question: Question = new Question();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private questionService: QuestionService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.question$.subscribe(
      question => {
        this.question = question;
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
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.question._id }),
      new InputField({
        key: 'name', label: 'Name', type: 'text', value: this.question.name,
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required.'
      }),
      new TextareaField({ key: 'answer', label: 'Answer.', value: this.question.answer }),
      // new InputField({ key: 'price', label: 'Price', type: 'number', value: (this.question.price as unknown as string) }),
    ];
  }

  onSave(question: Question): void {
    this.questionService.update(question).subscribe(
      p => this.router.navigate(['/', 'questions'])
    );
  }

}
