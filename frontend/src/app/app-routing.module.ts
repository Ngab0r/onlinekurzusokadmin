import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamsheetCreateComponent } from './page/examsheet-create/examsheet-create.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { ExamsheetsComponent } from './page/examsheets/examsheets.component';
import { QuestionEditComponent } from './page/question-edit/question-edit.component';
import { QuestionsComponent } from './page/questions/questions.component';
import { UsersComponent } from './page/users/users.component';
import { PaymentsComponent } from './page/payments/payments.component';
import { AttachmentComponent } from './page/attachment/attachment.component';
import { HelpComponent } from './page/help/help.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'questions/edit/:id',
    component: QuestionEditComponent,
  },
  {
    path: 'attachments',
    component: AttachmentComponent,
  },
  {
    path: 'examsheet/create',
    component: ExamsheetCreateComponent,
  },
  {
    path: 'examsheets',
    component: ExamsheetsComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
