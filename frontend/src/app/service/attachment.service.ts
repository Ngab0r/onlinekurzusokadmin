import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attachment } from '../model/attachment';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService extends BaseService<Attachment> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'attachments';
  }

}
