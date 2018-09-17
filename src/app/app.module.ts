import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';




export const firebaseCred = {
  apiKey: "AIzaSyCtgOPbmMn2PhB307Jztz0wo8Zku1ToRME",
  authDomain: "easylogin-e5fa3.firebaseapp.com",
  databaseURL: "https://easylogin-e5fa3.firebaseio.com",
  projectId: "easylogin-e5fa3",
  storageBucket: "easylogin-e5fa3.appspot.com",
  messagingSenderId: "852715724645"
};
firebase.initializeApp(firebaseCred);


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
