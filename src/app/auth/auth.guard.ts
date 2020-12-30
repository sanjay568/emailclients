import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take,tap } from 'rxjs/operators';
import { UniqueUserNameService } from '../unique-user-name.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(private authService: UniqueUserNameService,private router:Router){

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.signedin$.pipe(
      skipWhile((value)=> value==null),
      take(1),
      tap((authenicated)=>{

         if(!authenicated){
             this.router.navigateByUrl("/");
         }
      })
    )
    
  }
}
