import { Component, OnInit, Input } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseListObservable,
} from 'angularfire2/database';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input() animal: Object;
  @Input() isLoggedIn: boolean;
  @Input() type: string;
  @Input() isDog: boolean;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    console.log(this.isDog);
  }

  public removeAnimal(animal) {
    console.log(this.type);
    this.isDog
      ? this.db.list('dogs').remove(animal)
      : this.db.list('cats').remove(animal);
  }
}
