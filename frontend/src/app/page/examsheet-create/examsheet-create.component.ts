import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Examsheet } from 'src/app/model/examsheet';
import { ExamsheetService } from 'src/app/service/examsheet.service';

@Component({
  selector: 'app-examsheet-create',
  templateUrl: './examsheet-create.component.html',
  styleUrls: ['./examsheet-create.component.scss']
})
export class ExamsheetCreateComponent implements OnInit {

  examsheet: Examsheet = new Examsheet();

  constructor(
    private examsheetService: ExamsheetService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.examsheetService.create(ngForm.value).subscribe(
      examsheet => this.router.navigate(['/', 'examsheets']),
      err => console.error(err)
    );
  }

}
