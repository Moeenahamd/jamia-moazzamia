import { Component,OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { NgbdSortableHeader, SortEvent } from 'src/app/services/sortable.directive';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {
  formValue !:FormGroup;
  constructor(public service:BooksService,
    private modalService: NgbModal,private formbuilder:FormBuilder,private http:HttpClient){
       
      
      }
    ngOnInit(): void {
      
      this.formValue=this.formbuilder.group({
        name:'',
        author:'',
        topic:'',
        type:'',
        section:'',
        description:''
      });
    }
    onFormSubmit(){
      if(this.formValue.value){
        
        this.service.addBook(this.formValue.value).subscribe(res=>{
          
          alert:"entered book successfully";
          this.formValue.reset();
        })
      }
    }
    openPopUp(content:any){
      this.modalService.open(content, { size: 'lg' })
  
    }
}
