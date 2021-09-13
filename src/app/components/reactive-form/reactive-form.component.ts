import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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
   this.postalCode.setValidators([Validators.required]);
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

  private formFocus: FormControl;

  constructor(private formBuilder: FormBuilder, private elRef: ElementRef) { }

  ngOnInit(): void {
    this.initForm();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.focusNext();
    }
  }
  public onControlFocus(control: string): void {
    this.formFocus = this.shippingForm.controls[control] as FormControl;
  }

  private focusNext(): void {
    let focusNextControl: boolean = false;
    let focusSet: boolean = false;
    let firstKey: string;
    let invalidControls = Object.keys(this.shippingForm.controls).filter(key => {
      return !this.shippingForm.controls[key].valid 
    });
    let currentControlInvalid: boolean;
    Object.keys(this.shippingForm.controls).forEach((key, index) => {
      currentControlInvalid = this.shippingForm.controls[key].invalid;
      //Find the first invalid control, we will need it later in the case that the active focus is on the last control on the form
      if(!firstKey && currentControlInvalid){
        firstKey = key;
      }
      //If the current control is invalid 
      //AND the previous control is the currently focused one 
      //AND we haven't already set the focus.. Then set the focus on this control.
      if(currentControlInvalid && focusNextControl && !focusSet){
        this.elRef.nativeElement.querySelector('[formcontrolname = "' + key + '"]').focus();
        focusSet = true;
      }
      else if(this.shippingForm.controls[key] == this.formFocus){
        focusNextControl = true;
      }
      else if(!focusSet && focusNextControl && index == Object.keys(this.shippingForm.controls).length - 1){
        //If we are on the last control and we need to set the 'next' control 
        //AND we haven't already focused on a control
        //Then we need to set the focus to the first invalid control we found
        this.elRef.nativeElement.querySelector('[formcontrolname = "' + firstKey + '"]').focus();
      }
    });
  }

  private initForm(): void {
    this.isFormInitializing = true;
    const form = new ShippingDataForm(
      shippingFormDefaults,
      false
    );

    Object.keys(form).forEach(key => this.shippingForm.setControl(key, form[key]));
    //Add a custom validator onto the form
    this.shippingForm.setValidators([ReactiveFormValidators.validateEmails()]);

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
