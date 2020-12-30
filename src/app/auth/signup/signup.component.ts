import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatchPassword} from '../validators/match-password';
import {UniqueUserName} from '../validators/unique-user-name';
import {UniqueUserNameService} from '../../unique-user-name.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
  {

  errorMsg=false;
  authForm= new FormGroup({
    username: new FormControl(
      '',
      [ 
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
     ],[
       this.uniqueUserName.validate
     ]
    ),
    password: new FormControl(),
    passwordConfirmation: new FormControl()
  },{ validators: this.matchPassword.validate });


  constructor(
    private matchPassword: MatchPassword,
    private uniqueUserName:UniqueUserName,
    private authService: UniqueUserNameService)
    { }


  ngOnInit(): void {
    //this.authService.checkkAuth().subscribe(()=>{});
  }

 
  onSubmit = ()=>{
    
   
    if(this.authForm.invalid){
      return;
    }
   //  debugger;
    this.authService.signup(this.authForm.value).subscribe((response)=>{
      console.log(response);
    })

  }

  getErrorMsg = () =>{

    if(this.authForm.get('username').errors!=null && 
       this.authForm.get('username').errors.nonUniqueUsername){
      
        return 'Username is in use';
    }else if(!this.authForm.get('username').value && 
              this.authForm.get('username').touched){
                return 'Username is required';
    }else{}

    return false;
  }

}
