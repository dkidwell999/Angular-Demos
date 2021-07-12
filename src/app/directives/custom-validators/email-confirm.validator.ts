import { Directive } from "@angular/core";
import { AbstractControl, FormGroup, NgForm, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";
import { removeError } from "./validatorHelperFunctions";

/**
 * 
 * https://basarat.gitbook.io/typescript/future-javascript/spread-operator
 */
@Directive({
    selector: '[confirmEmails]',
    providers: [{ provide: NG_VALIDATORS, useExisting: validateMatchingEmailsDirective, multi: true }]
})
export class validateMatchingEmailsDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        if(!control) return null;
        return matchingEmailsValidator(control);
    }
}
export const matchingEmailsValidator: ValidatorFn = (form: FormGroup): ValidationErrors | null => {
    if(!form) return null;
    const email = form.controls['email'] && form.controls['email'].value ? form.controls['email'].value : '';
    const confirmEmail = form.controls['confirmEmail'] && form.controls['confirmEmail'].value ?  form.controls['confirmEmail'].value : '';
    if(email.toLowerCase() === confirmEmail.toLowerCase() || (email === '' || confirmEmail === '')){
        if(form.controls['email']) removeError(form.controls['email'], 'invalidConfirmEmails');
        if(form.controls['confirmEmail']) removeError(form.controls['confirmEmail'], 'invalidConfirmEmails');
        return null;
    } else {
        if(form.controls['email']) form.controls['email'].setErrors({...form.controls['email'].errors, 'invalidConfirmEmails': {value: email}});
        if(form.controls['confirmEmail']) form.controls['confirmEmail'].setErrors({...form.controls['confirmEmail'].errors, 'invalidConfirmEmails': {value: confirmEmail}});
        //Since we set the erros on the individial form controls, we do not need to set it on the form.
        return null;
    }
}