import { Injectable } from '@angular/core';
import { EmailDetailResponse } from './email.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {EmailService} from '../app/email.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<EmailDetailResponse> {

  
  constructor(private emailService:EmailService,private router:Router) {
    
  }

  resolve(activeRoute:ActivatedRouteSnapshot){
    
    const {id}=activeRoute.params;
    return this.emailService.getEmail(id);
  }
}
