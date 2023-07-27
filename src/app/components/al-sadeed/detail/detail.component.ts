import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  implements OnInit{
  id:any;
  book:any;
  //book:{Id:number,Name:string};
  constructor(private activatedroute:ActivatedRoute,private router:Router,private bookservice:BooksService,private http:HttpClient)
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
