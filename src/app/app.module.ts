import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ModalModule } from 'ngx-bootstrap/modal';

import { environment } from '../environments/environment';

import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { AnimalsComponent } from './animals/animals.component';
import { ModalAddAnimalComponent } from './modal-add-animal/modal-add-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalLoginComponent,
    AnimalsComponent,
    ModalAddAnimalComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [ModalLoginComponent, ModalAddAnimalComponent]
})
export class AppModule { }
