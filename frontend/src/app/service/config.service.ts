import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { get } from 'lodash';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
  outputTransform?: any;
  htmlOutput?: any;
  pipes?: any[];
  pipeArgs?: any[][];
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://127.0.0.1:3000/';

  userColumns: ITableColumn[] = [
    { key: "_id", title: "#" },
    { key: "firstName", title: "First Name" },
    { key: "lastName", title: "Last Name" },
    { key: "email", title: "Email" },
    {
      key: "address", title: "Address",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['country', 'city', 'street']]
    },
    { key: "active", title: "Active", htmlOutput: ConfigService.activeOrInactiveSign },
  ];

  questionColumns: ITableColumn[] = [
    { key: "_id", title: "#" },
    { key: "name", title: "Name" },
    { key: "answer", title: "Answer" },
    { key: "correctAnswer", title: "Correct answer" },
    { key: "type", title: "Type" },
    { key: "attachment", title: "Attachment" },
    { key: "active", title: "Active", htmlOutput: ConfigService.activeOrInactiveSign },
  ];
  // { key: "price", title: "Price", pipes: [new CurrencyPipe('hu-HU')], pipeArgs: [['HUF', 'symbol', '3.0']] },

  attachmentColumns: ITableColumn[] = [
    { key: "_id", title: "#" },
    {
      key: "user",
      title: "User",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['firstName', 'lastName']]
    },
    { key: "name", title: "Name" },
    { key: "url", title: "URL" },
  ];

  examsheetColumns: ITableColumn[] = [
    { key: "_id", title: "#" },
    { key: "name", title: "Name" },
    { key: "category", title: "Category" },
    {
      key: "user",
      title: "User",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['firstName', 'lastName']]
    },
    { key: "question", title: "Question" },
    { key: "time", title: "Time", pipes: [ConfigService.sqlDate] },
  ];

  paymentColumns: ITableColumn[] = [
    { key: "_id", title: "#" },
    {
      key: "user",
      title: "User",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['firstName', 'lastName']]
    },
    { key: "money", title: "Money" },
    { key: "time", title: "Time", pipes: [ConfigService.sqlDate] },
  ];

  constructor() { }

  static activeOrInactiveSign(v: boolean): string {
    console.log(`fn is running: ${v}`);
    const icon: string = v ? 'fa-check' : 'fa-ban';
    return `<i class="fas ${icon}"></i>`;
  }

  // row.customer.name => (row, 'customer.name')
  static getSubProperty(obj: any, ...keys: string[]): string | number | boolean | undefined {
    console.log(obj);
    return keys.map(key => get(obj, key)).join(' ');
  }

  static sqlDate(jsTime: number): string | number | boolean | undefined {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return Intl.DateTimeFormat('hu', options).format(jsTime);
  }

  static curveLongString(
    data: string,
    start: number,
    end: number,
    curve: string = '...'
  ): string {
    return data.slice(start, end) + curve;
  }

}
