import { Component ,OnInit, Input} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BooksService } from 'src/app/services/books.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formValue !:FormGroup;
  response:any;
  constructor(private formbuilder:FormBuilder,private service:AuthService,private router:Router,private login:BooksService,private dialogRef:MatDialogRef<LoginComponent>,
    ){}
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      name:['',Validators.required],
      password:['',Validators.required]
    });
    
  }
 
  click(){
    let payload={
      name:this.formValue.value.name,
      password:this.formValue.value.password
    
    };
   /* this.service.click(this.formValue.value).subscribe(result=>{
      if(result!=null){
        this.response=result;
        localStorage.setItem('token',this.response.jwtToken);
        this.router.navigate(['']);
      }
    })
   */
  
  this.valid();
  this.dialogRef.close();
  
  // this.login.isLogedIn.next(true);
  }
  /*ngOnDestroy(){
    this.login.booksManagement.next(false);
  }*/
  get f() { return this.formValue.controls; } 
  
  get name()
  {
    var user=this.formValue.get('name');
    return user; 
  }
  get password(){
    var psw= this.formValue.get('password');
    return psw;
  }
  valid(){
    var res=this.service.validateuser(this.formValue.value['name'],this.formValue.value['password']);
    if(res)
    {
      console.log(res);
      this.router.navigate(["books-management"])
      localStorage.setItem("name",this.formValue.value['name']);
      localStorage.setItem("password",this.formValue.value['password']);
    }
    else{
      alert("Invalid");
      
    }
  }
}
