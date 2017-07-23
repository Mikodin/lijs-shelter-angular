import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  user: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth) {
    this.user = fireAuth.authState;
  }

  public login(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public register(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
