import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { AlSadeedComponent } from './components/al-sadeed/al-sadeed.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layouts/footer/footer/footer.component';
import { BooksManagementComponent } from './components/books-management/books-management/books-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MHussainCampusComponent } from './components/m.hussain-campus/m.hussain-campus.component';
import { AlSadeedCampusComponent } from './components/al-sadeed-campus/al-sadeed-campus.component';
import { HttpClientModule } from '@angular/common/http';
import { MoazzamCollegeComponent } from './components/moazzam-college/moazzam-college.component';
import { LibraryComponent } from './components/library/library.component';
import { DirectionSchoolComponent } from './components/direction-school/direction-school.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import { CreateBooksComponent } from './components/books-management/books-management/create-books/create-books.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent,
    AlSadeedComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    BooksManagementComponent,
    MHussainCampusComponent,
    AlSadeedCampusComponent,

    MoazzamCollegeComponent,
    LibraryComponent,
    DirectionSchoolComponent,
    BookDetailsComponent,
    CreateBooksComponent
  
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBZ7R3FTuDGXqeAftQO6oECPczGOw8IFHY",
    authDomain: "jamiamoazzamia-39f9a.firebaseapp.com",
    projectId: "jamiamoazzamia-39f9a",
    storageBucket: "jamiamoazzamia-39f9a.appspot.com",
    messagingSenderId: "1096737869786",
    appId: "1:1096737869786:web:2e8530b557a64e64317ae3",
    measurementId: "G-EBQZ55QS97"
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
