import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,HttpEventType
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req:HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
       
         const modReq= req.clone({
             withCredentials: true
         });
         console.log(modReq);
        return next.handle(modReq).pipe(tap((val)=>{
           if(val.type=== HttpEventType.Sent){
               console.log("Requrst sent to server...");
           }

           if(val.type=== HttpEventType.Response){
            console.log("Response received from server");
            }
        }));
    }

}


