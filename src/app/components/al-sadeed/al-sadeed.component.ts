
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-al-sadeed',
  templateUrl: './al-sadeed.component.html',
  styleUrls: ['./al-sadeed.component.css']
})
export class AlSadeedComponent implements OnInit {
  books: Book[] = [];
  
  
  constructor(private bookService: BooksService){}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks().subscribe((res:any)=>{
      this.books = res;
     
    })
  }
}
