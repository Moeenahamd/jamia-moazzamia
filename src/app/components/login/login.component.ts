import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formValue !:FormGroup;
  response:any;
  constructor(private formbuilder:FormBuilder,private service:AuthService,private router:Router){}
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
   
  }
  get f() { return this.formValue.controls; } 
  
  get name()
  {
    return this.formValue.get('name');
  }
  get password(){
    return this.formValue.get('password');
  }
}
