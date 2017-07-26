import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-modal-add-animal',
  templateUrl: './modal-add-animal.component.html',
  styleUrls: ['./modal-add-animal.component.css']
})
export class ModalAddAnimalComponent implements OnInit {
  form: FormGroup;
  name: string;
  imageUrl: string;
  selectedAnimal: string;

  animalTypes = ['Dog', 'Cat']

  constructor(
    private modalService: BsModalRef,
    private fb: FormBuilder,
    private db: AngularFireDatabase
  ) {
    this.form = fb.group({
      name: this.name,
      imageUrl: this.imageUrl,
      selectedAnimal: this.selectedAnimal
    });
  }

  ngOnInit() {
  }

  public addAnimal() {
    var item = this.selectedAnimal === 'dog'
      ? this.db.list('/dogs')
      : this.db.list('/cats');

    var animal = {
      name: this.name,
      imageUrl: this.imageUrl
    }

    item.push(animal);
  }

}
