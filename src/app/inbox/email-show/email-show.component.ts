import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { EmailService,EmailDetailResponse } from '../../email.service';



@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email;
  loading: boolean = true;
  constructor(private activeRoute: ActivatedRoute,
              private emailService:EmailService) { 
              
  }

  ngOnInit(): void {
                this.email= this.activeRoute.snapshot.data.email;
                this.activeRoute.data.subscribe((data1)=>{
                 this.email = data1.email;
                 this.loading = false;
              })
  }

}
