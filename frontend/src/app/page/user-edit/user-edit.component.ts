import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user$: Observable<User> = this.ar.params.pipe(
    switchMap(params => this.userService.get(params.id))
  );
  user: User = new User();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => {
        this.user = user;
        this.user.password = '';
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
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.user._id }),
      new InputField({
        key: 'firstName', label: 'First Name', type: 'text', value: this.user.firstName || '',
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required.'
      }),
      new InputField({
        key: 'lastName', label: 'Last Name', type: 'text', value: this.user.lastName || '',
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required.'
      }),
      new InputField({
        key: 'email', label: 'Email', type: 'text', value: this.user.email || '',
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required.'
      }),
      new InputField({
        key: 'password', label: 'Password', type: 'text', value: this.user.password || '',
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required.'
      }),
      // new TextareaField({ key: 'questions', label: 'Questions.', value: this.user.questions }),
      // new InputField({ key: 'price', label: 'Price', type: 'number', value: (this.user.price as unknown as string) }),
    ];
  }

  onSave(user: User): void {
    this.userService.update(user).subscribe(
      p => this.router.navigate(['/', 'users'])
    );
  }

}
