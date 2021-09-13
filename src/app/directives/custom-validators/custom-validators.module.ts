import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { validateMatchingEmailsDirective } from "./email-confirm.validator";
import { ForbiddenValidatorDirective } from "./forbidden-name.validator";

@NgModule({
  declarations: [
    validateMatchingEmailsDirective,
    ForbiddenValidatorDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    validateMatchingEmailsDirective,
    ForbiddenValidatorDirective
  ],
  providers: []
})
export class CustomValidatorsModule { }