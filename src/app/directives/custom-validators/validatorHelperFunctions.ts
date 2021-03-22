import { AbstractControl } from "@angular/forms";

// call it in validator function if control is valid
//removeError(this.currencyForm.controls['currencyMaxSell'], 'smallerThan');

// this function removes single error
export function removeError(control: AbstractControl, error: string) {
  const err = control.errors; // get control errors
  if (err) {
    delete err[error]; // delete your own error
    if (!Object.keys(err).length) { // if no errors left
      control.setErrors(null); // set control errors to null making it VALID
    } else {
      control.setErrors(err); // controls got other errors so set them back
    }
  }
}
