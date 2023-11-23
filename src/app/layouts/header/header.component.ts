import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationComponent } from 'src/app/components/confirmation/confirmation.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { BooksService } from 'src/app/services/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  mobileMenu = true; 
  dropDownMenu = false;
  isLogedIn:Boolean=false;
  
  constructor(private service:BooksService,private dialog:MatDialog,private toastr: ToastrService,private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem("isLoggedIn")==null)
      {
        this.isLogedIn=false;
      }
      else{
        this.isLogedIn=true;
      }
  }
  login(){
    this.dialog.open(LoginComponent,{
			width:'30%'
		}).afterClosed().subscribe(val=>{
      if(localStorage.getItem("isLoggedIn")==null)
      {
			this.isLogedIn=false;
      }
      else{
        
        this.isLogedIn=true;
        this.router.navigate(['home']);
      }
			
		})
   
  }
  confirmation(){
		this.dialog.open(ConfirmationComponent,{width:'30%',
			height:'',
			data:{
        heading:'Confirmation',
				message: 'Are you sure you want to Logout?',
				  delete: 'logout',
				  cancel: 'Cancel'
			  }
		}).afterClosed().subscribe(val=>{
			if(val == "true"){
				this.logout();
			}
		})
		
	}
  logout(){
    localStorage.clear();
    this.toastr.success("Logout successfully");
    this.router.navigate(['home']);
    this.isLogedIn=false;

  }
}
