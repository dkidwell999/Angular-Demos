import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appForbiddenName]',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
  })
  export class ForbiddenValidatorDirective implements Validator {
    @Input('appForbiddenName') forbiddenName: string;
  
    validate(control: AbstractControl): ValidationErrors | null {
      return (this.forbiddenName && this.forbiddenName === control.value) ? { forbiddenName: this.forbiddenName}
                                : null;
    }
  }