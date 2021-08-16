import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Attachment } from 'src/app/model/attachment';
import { AttachmentService } from 'src/app/service/attachment.service';

@Component({
  selector: 'app-attachment-edit',
  templateUrl: './attachment-edit.component.html',
  styleUrls: ['./attachment-edit.component.scss']
})
export class AttachmentEditComponent implements OnInit {

  attachment$: Observable<Attachment> = this.ar.params.pipe(
    switchMap(params => this.attachmentService.get(params.id))
  );
  attachment: Attachment = new Attachment();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private attachmentService: AttachmentService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.attachment$.subscribe(
      attachment => {
        this.attachment = attachment;
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
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.attachment._id }),
      new InputField({
        key: 'name', label: 'Name', type: 'text', value: this.attachment.name,
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required.'
      }),
      new InputField({
        key: 'url', label: 'Url', type: 'text', value: this.attachment.url,
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Url is required.'
      }),
      // new TextareaField({ key: 'questions', label: 'Questions.', value: this.attachment.questions }),
      // new InputField({ key: 'price', label: 'Price', type: 'number', value: (this.attachment.price as unknown as string) }),
    ];
  }

  onSave(attachment: Attachment): void {
    this.attachmentService.update(attachment).subscribe(
      p => this.router.navigate(['/', 'attachments'])
    );
  }

}
