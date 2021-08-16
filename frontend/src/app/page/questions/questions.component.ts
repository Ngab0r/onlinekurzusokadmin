import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/question';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.questionColumns;
  list$: Observable<Question[]> = this.questionService.getAll();

  constructor(
    private config: ConfigService,
    private questionService: QuestionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(question: Question): void {
    this.router.navigate(['/', 'questions', 'edit', question._id]);
  }

}
