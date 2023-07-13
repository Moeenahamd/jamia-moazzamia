import { Component, QueryList, ViewChildren,OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { NgbdSortableHeader, SortEvent } from 'src/app/services/sortable.directive';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { first } from 'rxjs/operators';

import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-books-management',
  templateUrl: './books-management.component.html',
  styleUrls: ['./books-management.component.css']
})
export class BooksManagementComponent implements OnInit {
  	books$: Observable<Book[]>;
	total$: Observable<number>;
	formValue !:FormGroup;
	currentbook:any;
	currentbookid:any;
	editmode:boolean=false;
	selectedfile:any;
	coverUrl:string = '';

	
	

	@ViewChildren(NgbdSortableHeader) headers: any;
	public items: Array<{ field: string }> = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];

  	constructor(public service:BooksService,private modalService: NgbModal,private formbuilder:FormBuilder,private http:HttpClient,private af:AngularFireStorage){
    	this.books$ = service.books$;
		this.total$ = service.total$;
  	}
	ngOnInit(): void {
		
		this.formValue=this.formbuilder.group({
			name:'',
			author:'',
			topic:'',
			type:'',
			section:'',
			description:'',
			cover:''
		});
		
	}
	onFormSubmit(){
		let payload={
			name:this.formValue.value.name,
			author:this.formValue.value.author,
			type:this.formValue.value.type,
			topic:this.formValue.value.topic,
			section:this.formValue.value.section,
			description:this.formValue.value.description,
			cover:this.coverUrl,
			link:this.formValue.value.link,
		};
		if(this.formValue.value){
			if(!this.editmode){
				this.service.addBook(payload).subscribe(res=>{
					
					alert:"entered book successfully";
					this.formValue.reset();
					this.books$ = this.service.books$;
					this.total$ = this.service.total$;
				})
		}
		else{
			this.service.updateBook(this.currentbook.id,payload).subscribe(res=>{
				
				alert:"edit book successfully";
				this.formValue.reset();
			})

		}
		}
	}
  	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header:any) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
	
	openPopUp(content:any){
		this.modalService.open(content, { size: 'lg'})
		
	}
	
	deletebook(id:number){
		this.service.deletebook(id).subscribe({
			next:(res)=>{
				alert('book deleted');
				
			}
		})
	}
	openeditform(content:any,book:any){

		this.modalService.open(content, { size: 'lg'})
		this.currentbook=book
		this.formValue.setValue({
			name:this.currentbook.name,
			author:this.currentbook.author,
			topic:this.currentbook.topic,
			type:this.currentbook.type,
			section:this.currentbook.section,
			description:this.currentbook.description,
			cover:this.currentbook.cover
		});
		this.editmode=true;
		
	}
	
	onfileselected(event:any){
		this.selectedfile=event.target.files[0];
	}
	OnUpload(){
		var n = Date.now();
		const file =this.selectedfile;
		const filePath = `RoomsImages/${n}`;
		const fileRef = this.af.ref(filePath);
		const task = this.af.upload(filePath,this.selectedfile);
		task
      	.snapshotChanges()
      	.pipe(
        finalize(() => {
			var downloadURL = fileRef.getDownloadURL();
			downloadURL.subscribe(url => {
			  if (url) {	
				this.coverUrl = url;
				this.onFormSubmit();
			  }
			});
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
	}
	
}
