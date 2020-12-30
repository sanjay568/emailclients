import { Component, OnInit } from '@angular/core';
import { UniqueUserNameService } from 'src/app/unique-user-name.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private uniqueUserNameService: UniqueUserNameService,
              private router:Router) { }

  ngOnInit(): void {

    this.uniqueUserNameService.signout().subscribe((res)=>{
        
         setTimeout(()=>{
             this.router.navigateByUrl('/');
         },3000);
    });
  }

}