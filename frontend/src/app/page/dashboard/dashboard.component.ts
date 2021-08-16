import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Attachment } from 'src/app/model/attachment';
import { Examsheet } from 'src/app/model/examsheet';
import { Question } from 'src/app/model/question';
import { User } from 'src/app/model/user';
import { AttachmentService } from 'src/app/service/attachment.service';
import { ExamsheetService } from 'src/app/service/examsheet.service';
import { QuestionService } from 'src/app/service/question.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  attachmentList$: Observable<Attachment[]> = this.attachmentService.getAll();
  userList$: Observable<User[]> = this.userService.getAll();
  examsheetList$: Observable<Examsheet[]> = this.examsheetService.getAll();
  questionList$: Observable<Question[]> = this.questionService.getAll();

  attachmentNumber: number = 0;
  userNumber: number = 0;
  examsheetNumber: number = 0;
  questionNumber: number = 0;

  constructor(
    private attachmentService: AttachmentService,
    private userService: UserService,
    private examsheetService: ExamsheetService,
    private questionService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.attachmentList$.subscribe(att => this.attachmentNumber = att.length);
    this.userList$.subscribe(user => this.userNumber = user.length);
    this.examsheetList$.subscribe(exam => this.examsheetNumber = exam.length);
    this.questionList$.subscribe(question => this.questionNumber = question.length);
  }

}
