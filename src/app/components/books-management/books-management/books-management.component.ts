import {AfterViewInit, Component, QueryList, ViewChildren,OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { first } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { map, finalize } from "rxjs/operators";
import { CreateBooksComponent } from './create-books/create-books.component';
import { ConfirmdeletionComponent } from './confirmdeletion/confirmdeletion.component';
import { ToastrService } from 'ngx-toastr';

const ELEMENT_DATA: Book[] = [
	{name: '', cover: 'Hydrogen', link: '', author: 'H', type: '',description:'',topic:'',id:0},
	{name: '', cover: 'jhhjf', link: '', author: 'H', type: '',description:'',topic:'',id:1},
	{name: '', cover: 'dklkdf', link: '', author: 'H', type: '',description:'',topic:'',id:2},
	{name: '', cover: 'dfkllkdf', link: '', author: 'H', type: '',description:'',topic:'',id:3},
  ];




@Component({
  selector: 'app-books-management',
  templateUrl: './books-management.component.html',
  styleUrls: ['./books-management.component.css'],
  
 
})
export class BooksManagementComponent implements AfterViewInit, OnInit {
	
	books:Book[] = [];
	currentbook:any;
	currentbookid:any;
	editmode:boolean=false;
	selectedfile:any;
	coverUrl:string = '';
	deleteBookId:any;

	displayedColumns: string[] = [ 'name', 'cover','author','topic','type','description','action'];
 	dataSource = new MatTableDataSource(this.books);
	 @ViewChild(MatPaginator) paginator: any;
 	 @ViewChild(MatSort) sort: any;
	public items: Array<{ field: string }> = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];

  	constructor(public service:BooksService,private toastr: ToastrService,private dialog:MatDialog,private formbuilder:FormBuilder,private http:HttpClient,private af:AngularFireStorage,){

  	}
	  ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	  }
	
	  applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	
		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
	  }
	   
	ngOnInit(): void {
		this.getBooks();
	}
	
	getBooks(){
		this.service.getBooks().subscribe((res:any)=>{
			this.books = res.payload;
			this.dataSource.data = this.books;
			this.toastr.success(res.message)
		})
	}
	
	openPopup(){
		this.dialog.open(CreateBooksComponent,{
			width:'60%',
			height:''
		}).afterClosed().subscribe(val=>{
			this.getBooks();
			
		})
	}
	
	deletebook(id:number){
		this.deleteBookId = id;
		this.dialog.open(ConfirmdeletionComponent,{width:'30%',
			height:'',
		}).afterClosed().subscribe(val=>{
			this.deletion();
		})
		
	}
	deletion(){
		this.service.deletebook(this.deleteBookId).subscribe((res:any)=>{
			this.toastr.success("Book deleted successfully")
			this.getBooks();
		})
	}

	openeditform(book:any){
		this.dialog.open(CreateBooksComponent, {width:'60%',
		height:'',
		data:book }).afterClosed().subscribe(val=>{
			this.getBooks();
		})
	}
}
