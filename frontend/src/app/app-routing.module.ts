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
import { ExamsheetEditComponent } from './page/examsheet-edit/examsheet-edit.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserCreateComponent } from './page/user-create/user-create.component';
import { QuestionCreateComponent } from './page/question-create/question-create.component';
import { PaymentEditComponent } from './page/payment-edit/payment-edit.component';
import { AttachmentEditComponent } from './page/attachment-edit/attachment-edit.component';

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
    path: 'users/create',
    component: UserCreateComponent,
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'question/create',
    component: QuestionCreateComponent,
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
    path: 'attachment/edit/:id',
    component: AttachmentEditComponent,
  },
  {
    path: 'examsheet/create',
    component: ExamsheetCreateComponent,
  },
  {
    path: 'examsheet/edit/:id',
    component: ExamsheetEditComponent,
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
    path: 'payment/edit/:id',
    component: PaymentEditComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'loginpage',
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
