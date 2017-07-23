import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css'],
})
export class ModalLoginComponent implements OnInit {
  public title: string = 'Modal with component';
  public email: string = '';
  public password: string = '';
  form: FormGroup;

  constructor(private modalService: BsModalRef,
    private fb: FormBuilder,
    private userService: UserService) {
    this.form = fb.group({
      email: this.email,
      password: [this.password, Validators.minLength(8)],
    });
  }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.email, this.password)
      .then(res => alert('Success'))
      .catch(err => console.log(err));
  }

  login() {
    this.userService.login(this.email, this.password)
      .then(res => this.modalService.hide())
      .catch(err => console.log(err));
  }
}
