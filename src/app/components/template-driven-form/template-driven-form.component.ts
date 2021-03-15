import { Component, OnInit } from '@angular/core';

/**
 * Resources
 * HTML Autofill documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
 * Introduction to Angular Forms: https://angular.io/guide/forms-overview
 * Building a Template-Driven form: https://angular.io/guide/forms (This is is basis for this demo)
 * Validating Angular forms: https://angular.io/guide/form-validation
 */

export interface ShippingAddress{
  firstName: string;
  lastName: string;
  addressLineOne: string;
  addressLineTwo?: string;
  state: string;
  postalCode: string;
  country: string;
}

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  public states = ['California', 'Arizona', 'Nevada', 'New Mexico'];

  public formModel: ShippingAddress = {
    firstName: '',
    lastName: '',
    addressLineOne: '',
    addressLineTwo: '',
    state: '',
    postalCode: '',
    country: ''
  };
  
  public clearForm(): void {
    this.formModel = {
      firstName: '',
      lastName: '',
      addressLineOne: '',
      addressLineTwo: '',
      state: '',
      postalCode: '',
      country: ''
    };
  }

submitted = false;

public onSubmit() { 
  this.submitted = true; 
}

public showFormControls(form: any): boolean {
  return form && form.controls.name && form.controls.name.value; 
}

}
