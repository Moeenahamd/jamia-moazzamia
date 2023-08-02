import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     /* if(this.service.isLogedin())
      { return true;}
      else{
        this.router.navigate(['login']);
        return false;
      }*/
      if(localStorage.getItem("name")==null&& localStorage.getItem("password")==null)
      {
        this.router.navigate(["home"]);
        return false;
      }
      else {
        return true;
      }

   
  }
  
}
