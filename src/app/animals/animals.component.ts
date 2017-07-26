import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalAddAnimalComponent } from '../modal-add-animal/modal-add-animal.component';

import { UserService } from '../user.service';

import {
  AngularFireDatabase,
  FirebaseListObservable,
} from 'angularfire2/database';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  dogs = [];
  cats: FirebaseListObservable<any[]>;
  isLoggedIn: boolean = false;
  constructor(
    private modalService: BsModalService,
    private db: AngularFireDatabase,
    public userService: UserService
  ) { }

  ngOnInit() {
    /*
    * TODO: Expand on this
    * These are 2 ways to do the same thing
    */
    this.db.list('/dogs').subscribe(
      dogs => { console.log(dogs); this.dogs = dogs; },
      err => console.error(err)
    );

    this.cats = this.db.list('/cats');

    this.userService.user.subscribe(
      (res) => {
        this.isLoggedIn = res ? true : false;
        console.log(res);
      }
    );
  }

  public addAnimal(isDog: boolean) {
    this.modalService.show(ModalAddAnimalComponent);
  }


}
