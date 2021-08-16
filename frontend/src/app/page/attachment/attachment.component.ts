import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Attachment } from 'src/app/model/attachment';
import { AttachmentService } from 'src/app/service/attachment.service';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {

  list$: Observable<Attachment[]> = this.attachmentService.getAll();

  constructor(
    private attachmentService: AttachmentService,
  ) { }

  ngOnInit(): void {
  }

}
