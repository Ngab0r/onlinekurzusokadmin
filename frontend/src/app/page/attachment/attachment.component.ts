import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Attachment } from 'src/app/model/attachment';
import { Payment } from 'src/app/model/payment';
import { AttachmentService } from 'src/app/service/attachment.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {


  tableColumns: ITableColumn[] = this.config.attachmentColumns;
  list$: Observable<Attachment[]> = this.attachmentService.getAll();

  constructor(
    private config: ConfigService,
    private attachmentService: AttachmentService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(attachment: Attachment): void {
    this.router.navigate(['/', 'attachment', 'edit', attachment._id]);
  }
}
