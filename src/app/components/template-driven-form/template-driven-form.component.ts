import { Component, OnInit } from '@angular/core';

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
