
import {AfterViewInit, Component, QueryList, ViewChildren,OnInit, ViewChild ,Inject} from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { map, finalize } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {
  formValue !:FormGroup;
  books:Book[] = [];
	currentbook:any;
	currentbookid:any;
	editmode:boolean=false;
	selectedfile:any;
  selectedbook:any;
	coverUrl:string = '';
  bookUrl:string='';
 //action:string='Save';
 action:boolean=true;
  isDisabled:any;
  
  constructor(public service:BooksService,private af:AngularFireStorage,private formbuilder:FormBuilder,private http:HttpClient,private toastr: ToastrService,private dialogRef:MatDialogRef<CreateBooksComponent>,
    @Inject(MAT_DIALOG_DATA) public editdata:any){
}
    ngOnInit(): void {
      this.formValue=this.formbuilder.group({
        name:['',Validators.required],
        author:['',Validators.required],
        topic:['',Validators.required],
        type:['',Validators.required],
        //section:['',Validators.required],
        description:['',Validators.required],
        cover:['',Validators.required],
        link:['',Validators.required]
      });
      
      
      if(this.editdata){
      
       this.action=false;
        this.formValue.controls['name'].setValue(this.editdata.name);
        this.formValue.controls['author'].setValue(this.editdata.author);
        this.formValue.controls['topic'].setValue(this.editdata.topic);
        this.formValue.controls['type'].setValue(this.editdata.type);
       // this.formValue.controls['section'].setValue(this.editdata.section);
        this.formValue.controls['description'].setValue(this.editdata.description);
        this.coverUrl = this.editdata.cover;
        this.bookUrl=this.editdata.link;
      }
    }
    onFormSubmit(){
      this.isDisabled = true;
      console.log('call');
      let payload={
        name:this.formValue.value.name,
        author:this.formValue.value.author,
        type:this.formValue.value.type,
        topic:this.formValue.value.topic,
        //section:this.formValue.value.section,
        description:this.formValue.value.description,
        cover:this.coverUrl,
        link:this.bookUrl,
       
      };
      if(this.formValue.value){
        if(!this.editdata) {
          this.service.addBook(payload).subscribe(res=>{
            if(res.status == 200){
              this.toastr.success(res.message)
              this.formValue.reset();
              this.isDisabled = false;
              this.dialogRef.close();
            }
          })
        }
        else{
          this.service.updateBook(this.editdata.id,payload).subscribe(res=>{
            if(res.status == 200){
              this.toastr.success(res.message)
              this.formValue.reset();
              this.isDisabled = false;
              this.dialogRef.close();
            }
          })
        }
      }
    }
    
	onBookCoverUpload(event:any){
    this.isDisabled = true;
		var n = Date.now();
		const file = event.target.files[0];
		const filePath = `RoomsImages/${n}`;
		const fileRef = this.af.ref(filePath);
		const task = this.af.upload(filePath,file);
		task
      	.snapshotChanges()
      	.pipe(
        finalize(() => {
			var downloadURL = fileRef.getDownloadURL();
			downloadURL.subscribe(url => {
			  if (url) {	
      
				this.coverUrl = url;
			//	this.onFormSubmit();
      this.isDisabled = false;
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

  onBookUpload(event:any){
    this.isDisabled = true;
		var n = Date.now();
		const file = event.target.files[0];
		const filePath = `RoomsImages/${n}`;
		const fileRef = this.af.ref(filePath);
		const task = this.af.upload(filePath,file);
		task
      	.snapshotChanges()
      	.pipe(
        finalize(() => {
			var downloadURL = fileRef.getDownloadURL();
			downloadURL.subscribe(url => {
			  if (url) {	
      
				this.bookUrl = url;
			//	this.onFormSubmit();
      this.isDisabled = false;
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


  Showsucess(){
    this.toastr.success('Book added sucessfully');
  }
  Sucess(){
    this.toastr.success('Book edited sucessfully');
  }
  get name()
  {
    return this.formValue.get('name');
  }
  get author()
  {
    return this.formValue.get('author');
  }
  get type()
  {
    return this.formValue.get('type');
  }
  get topic()
  {
    return this.formValue.get('topic');
  }
  get description()
  {
    return this.formValue.get('description');
  }
}

