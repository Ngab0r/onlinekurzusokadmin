import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Examsheet } from 'src/app/model/examsheet';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { ExamsheetService } from 'src/app/service/examsheet.service';

@Component({
  selector: 'app-examsheets',
  templateUrl: './examsheets.component.html',
  styleUrls: ['./examsheets.component.scss']
})
export class ExamsheetsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.examsheetColumns;
  list$: Observable<Examsheet[]> = this.examsheetService.getAll();

  constructor(
    private config: ConfigService,
    private examsheetService: ExamsheetService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.list$.subscribe(item => console.log(item));
  }

  onSelectOne(examsheet: Examsheet): void {
    this.router.navigate(['/', 'examsheets', 'edit', examsheet._id]);
  }
}
