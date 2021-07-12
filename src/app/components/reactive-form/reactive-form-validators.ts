import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { removeError } from "src/app/directives/custom-validators/validatorHelperFunctions";

export class ReactiveFormValidators {
    public static validateEmails(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            this.validateMatchingEmails(control.get('email') as FormControl, control.get('confirmEmail') as FormControl);
            return null;
        }
    }

    private static validateMatchingEmails(email: FormControl, confirmEmail: FormControl): void {
        if(!email.value || !confirmEmail.value || email.value.toLowerCase() !== confirmEmail.value.toLowerCase()){
            confirmEmail.setErrors({...confirmEmail.errors, 'invalidConfirmEmails': {value: email.value}})
        } else {
            //removeError(email, 'invalidConfirmEmails');
            removeError(confirmEmail, 'invalidConfirmEmails');
        }
    }

    public static forbiddenNameValidator(forbiddenName: string): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            if(control && control.value.toLowerCase() === forbiddenName.toLowerCase()){
                return {
                    'forbiddenName' : {value: forbiddenName } 
                }
            }
        }
    }
}