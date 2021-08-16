import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';

registerLocaleData(localeHu);

import { AreusFormModule } from './areus-form/areus-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { XPipePipe } from './pipe/x-pipe.pipe';
import { JwtInterceptorInterceptor } from './service/jwt-interceptor.interceptor';

import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { DataTableComponent } from './common/data-table/data-table.component';

import { AttachmentComponent } from './page/attachment/attachment.component';
import { AttachmentEditComponent } from './page/attachment-edit/attachment-edit.component';

import { UsersComponent } from './page/users/users.component';
import { UserCreateComponent } from './page/user-create/user-create.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';

import { QuestionsComponent } from './page/questions/questions.component';
import { QuestionCreateComponent } from './page/question-create/question-create.component';
import { QuestionEditComponent } from './page/question-edit/question-edit.component';

import { ExamsheetsComponent } from './page/examsheets/examsheets.component';
import { ExamsheetCreateComponent } from './page/examsheet-create/examsheet-create.component';
import { ExamsheetEditComponent } from './page/examsheet-edit/examsheet-edit.component';

import { PaymentsComponent } from './page/payments/payments.component';
import { PaymentEditComponent } from './page/payment-edit/payment-edit.component';
import { HelpComponent } from './page/help/help.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    DashboardComponent,
    DataTableComponent,
    XPipePipe,
    LoginComponent,
    UsersComponent,
    UserCreateComponent,
    UserEditComponent,
    QuestionsComponent,
    QuestionCreateComponent,
    QuestionEditComponent,
    AttachmentComponent,
    AttachmentEditComponent,
    ExamsheetsComponent,
    ExamsheetCreateComponent,
    ExamsheetEditComponent,
    PaymentsComponent,
    PaymentEditComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AreusFormModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'hu-HU' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
