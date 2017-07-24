import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-modal-add-animal',
  templateUrl: './modal-add-animal.component.html',
  styleUrls: ['./modal-add-animal.component.css']
})
export class ModalAddAnimalComponent implements OnInit {
  form: FormGroup;
  name: string;

  constructor(private modalService: BsModalRef, private fb: FormBuilder) {
    this.form = fb.group({
      name: this.name,
    });
  }

  ngOnInit() {
  }

}
