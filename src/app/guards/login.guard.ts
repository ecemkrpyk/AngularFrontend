import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
//birşeyi yapabilme yetkisi var mı yok mu
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthService, private toastrService:ToastrService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(this.authService.isAuthenticated){//tokenı varsa
      return true;

    }else{
      this.router.navigate(["login"]) //nereyi navigate olmak istediğimiz
      this.toastrService.info("sisteme giriş yapmalısınız")
      return false;
    }
  }
  
}
