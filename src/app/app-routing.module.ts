import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BooksComponent } from './components/books/books.component';
import { ContactComponent } from './components/contact/contact.component';
import { AlSadeedComponent } from './components/al-sadeed/al-sadeed.component';
import { BooksManagementComponent } from './components/books-management/books-management/books-management.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'books', component:BooksComponent},
  {path: 'books-management', component:BooksManagementComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'al-sadeed', component:AlSadeedComponent},
  {path: '', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
