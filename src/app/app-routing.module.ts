import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BooksComponent } from './components/books/books.component';
import { ContactComponent } from './components/contact/contact.component';
import { AlSadeedComponent } from './components/al-sadeed/al-sadeed.component';
import { BooksManagementComponent } from './components/books-management/books-management/books-management.component';


import { LibraryComponent } from './components/library/library.component';
import { MHussainCampusComponent } from './components/m.hussain-campus/m.hussain-campus.component';
import { MoazzamCollegeComponent } from './components/moazzam-college/moazzam-college.component';
import { DirectionSchoolComponent } from './components/direction-school/direction-school.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import { LoginComponent } from './components/login/login.component';
import{DetailComponent} from './components/al-sadeed/detail/detail.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'books', component:BooksComponent},
  {path: 'books/:Id', component:BookDetailsComponent},
  {path: 'books-management', component:BooksManagementComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'al-sadeed', component:AlSadeedComponent},
 
  {path:'library',component:LibraryComponent},
  {path:'m.hussain-campus',component:MHussainCampusComponent},
  {path:'moazzam-college',component:MoazzamCollegeComponent},
  {path:'direction-school',component:DirectionSchoolComponent},
  {path:'login',component:LoginComponent},
 
  {path:'al-sadeed',component:AlSadeedComponent},
  {path:'al-sadeed/:Id',component:DetailComponent},
  {path: '', component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

