import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqueUserNameService } from '../../unique-user-name.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isUserValid: boolean;

  signInForm = new FormGroup({
     username: new FormControl('',[ Validators.required]),
     password: new FormControl('',[Validators.required])
  })
  constructor(private unAAuthService: UniqueUserNameService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
  
    //debugger;
    if(this.signInForm.invalid){
        return;
    }

    this.unAAuthService.signin(this.signInForm.value).subscribe({
      
      next: ()=> {
        this.router.navigateByUrl('/inbox');
      },
      error: err =>{
        console.log(err);
         if(err.error.password || err.error.username){
              this.signInForm.setErrors({
                 "credentials": true
              })
         }
        
      }

      
    })
  }

}
