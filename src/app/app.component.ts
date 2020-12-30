import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {UniqueUserNameService} from './unique-user-name.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  signedin$: BehaviorSubject<boolean>;

  constructor(private authService: UniqueUserNameService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});
  }
}
