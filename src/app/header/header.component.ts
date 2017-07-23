import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalLoginComponent  } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public openModalLogin(template: TemplateRef<any>) {
    this.modalService.show(ModalLoginComponent);
  }

}
