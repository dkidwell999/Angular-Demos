import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShippingAddress } from 'src/app/models/shipping-address';
import { ReactiveFormValidators } from './reactive-form-validators';

//Form default values

 const shippingFormDefaults: any = {
   firstName: 'Golden',
   lastName: 'Hippo',
}

/**
 * https://angular.io/guide/reactive-forms
 * 
 * https://angular.io/api/forms/AbstractControl
 * 
 */

//Define an alias to typeof { [K in keyof ShippingAddress]: FormControl | FormGroup }
type ShippingFormDataContract = { [K in keyof ShippingAddress]: FormControl | FormGroup };

class ShippingDataForm implements ShippingFormDataContract{
  public readonly firstName = new FormControl();
  public readonly lastName = new FormControl();
  public readonly addressLineOne = new FormControl();
  public readonly addressLineTwo = new FormControl();
  public readonly state = new FormControl();
  public readonly postalCode = new FormControl();
  public readonly country = new FormControl();
  public readonly email = new FormControl();
  public readonly confirmEmail = new FormControl();
  public readonly test = new FormControl();
  
  constructor(json: Partial<ShippingAddress>, isLocked: boolean ) {
    Object.keys(json).forEach(jkey => {
      Object.keys(this).forEach(key => {
        if(jkey === key){
          this[key].setValue(json[jkey]);
          this[key].setValidators([Validators.required]);
        }
      })
    })


    this.firstName.setValidators([Validators.required, ReactiveFormValidators.forbiddenNameValidator('David'), ReactiveFormValidators.forbiddenNameValidator('Dave')])
    /*
    this.firstName.setValue(json.firstName);
    this.firstName.setValidators([Validators.required]);
    
    this.lastName.setValue(json.lastName);
    this.lastName.setValidators([Validators.required]);
    */
   this.email.setValidators([Validators.required, Validators.email]);
   this.confirmEmail.setValidators([Validators.required, Validators.email]);
    if(isLocked)
    {
      this.firstName.disable();
      this.lastName.disable();
    } else 
    {
      this.firstName.enable();
      this.lastName.enable();
    }
  }
}

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public states = ['California', 'Arizona', 'Nevada', 'New Mexico'];
  public shippingForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  private isFormInitializing: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.isFormInitializing = true;
    const form = new ShippingDataForm(
      shippingFormDefaults,
      false
    );

    Object.keys(form).forEach(key => this.shippingForm.setControl(key, form[key]));
    //Add a custom validator onto the form
    this.shippingForm.setValidators([ReactiveFormValidators.validateEmails()])

    setTimeout(() => this.isFormInitializing = false);
  }

  //Only necessary because of how we are displaying validation messages...
  get firstName() { return this.shippingForm.get('firstName'); }
  get lastName() { return this.shippingForm.get('lastName'); }
  get addressLineOne() { return this.shippingForm.get('addressLineOne'); }
  get addressLineTwo() { return this.shippingForm.get('addressLineTwo'); }
  get state() { return this.shippingForm.get('state'); }
  get postalCode() { return this.shippingForm.get('postalCode'); }
  get country() { return this.shippingForm.get('country'); }
  get email() { return this.shippingForm.get('email'); }
  get confirmEmail() { return this.shippingForm.get('confirmEmail'); }

}
