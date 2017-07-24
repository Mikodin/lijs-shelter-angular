import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalAddAnimalComponent } from '../modal-add-animal/modal-add-animal.component';

import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  dogs = [];
  cats: FirebaseListObservable<any[]>;
  constructor(
    private modalService: BsModalService,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    /*
    * TODO: Expand on this
    * These are 2 ways to do the same thing
    */
    this.db.list('dogs').subscribe(
      x => { console.log(x); this.dogs = x; },
      e => console.error(e)
    );

    this.cats = this.db.list('/cats');
  }

  public addAnimal(isDog: boolean) {
    this.modalService.show(ModalAddAnimalComponent);
  }
}
