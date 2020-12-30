import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface EmailSummary{

  id: string,
  subject: string,
  from :string
}
export interface EmailDetailResponse{
  id:string;
  from : string;
  to:string;
  subject:string;
  text:string;
}
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  rootUrl = 'https://api.angular-email.com';
  constructor(private http:HttpClient) { }

  getEmails(){
     
     return this.http.get<EmailSummary[]>(this.rootUrl+'/emails');
  }

  getEmail(id:string){

     return this.http.get<EmailDetailResponse>(this.rootUrl+'/emails/'+id);
  }

}
