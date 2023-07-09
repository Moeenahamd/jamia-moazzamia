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
import { FormsModule } from '@angular/forms';
import { MHussainCampusComponent } from './components/m.hussain-campus/m.hussain-campus.component';
import { AlSadeedCampusComponent } from './components/al-sadeed-campus/al-sadeed-campus.component';
import { HttpClientModule } from '@angular/common/http';
import { MoazzamCollegeComponent } from './components/moazzam-college/moazzam-college.component';
import { LibraryComponent } from './components/library/library.component';
import { DirectionSchoolComponent } from './components/direction-school/direction-school.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';


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
    BookDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
