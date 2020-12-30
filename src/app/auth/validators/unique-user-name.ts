import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AbstractControl, AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import {map,catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {UniqueUserNameService} from '../../unique-user-name.service';

@Injectable({   providedIn:'root'})
export class UniqueUserName implements AsyncValidator {

    constructor(private uniqueUserService:UniqueUserNameService){

    }
    validate = (control: FormControl) =>{
        
        const {value} = control;
    
        return this.uniqueUserService.usernameAvailable(value).pipe(
            map((result)=>{
               if(result.available){
                   return null;
               }
            }),
            catchError((err)=>{
                  
                if(err.error.username!=null){
                    return of({ nonUniqueUsername: true })}
                else{
                    return of({  noConnection: true })
                }
            })
        )
    }  
}
