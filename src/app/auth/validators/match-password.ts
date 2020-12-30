import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors, Validator, Validators,FormGroup} from '@angular/forms';

@Injectable({   providedIn:'root'})
export class MatchPassword implements Validator {
    
    validate(formGroup: FormGroup) {
        const {password,passwordConfirmation} = formGroup.value;

        if(password === passwordConfirmation){
            return null;
        }
        else{
            return{  passwordNotMatch : true};
        }
        
    }
}
