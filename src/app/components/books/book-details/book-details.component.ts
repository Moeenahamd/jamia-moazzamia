import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  id:any;
  book:any;
  //book:{Id:number,Name:string};
  constructor(private activatedroute:ActivatedRoute,private router:Router,private bookservice:BooksService)
  { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['Id']; 
    this.getBokkById(this.id);
  }

  getBokkById(id:number)
  { 
    this.bookservice.getBookById(id).subscribe((res:any)=>{
    this.book=res;
   })

  }

}
