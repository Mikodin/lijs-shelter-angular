import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { UserService } from '../user.service';
import { ModalLoginComponent  } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;

  constructor(private modalService: BsModalService, private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(
      (res) => {
        console.log(res);
        this.isLoggedIn = res ? true : false
        console.log(this.isLoggedIn);
      }
    );
  }

  public openModalLogin(template: TemplateRef<any>) {
    this.modalService.show(ModalLoginComponent);
  }

  public logout() {
    this.userService.logout();
  }

}
